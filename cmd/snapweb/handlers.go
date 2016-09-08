/*
 * Copyright (C) 2014, 2015, 2016 Canonical Ltd
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

package main

import (
  "encoding/json"
  "fmt"
  "log"
  "time"
  "net/http"
  "os"
  "path/filepath"
  "text/template"

  "syscall"

  "github.com/snapcore/snapd/client"
  "github.com/snapcore/snapweb/snappy"
)

type branding struct {
  Name    string
  Subname string
}

type templateData struct {
  Branding     branding
  SnapdVersion string
}

var newSnapdClient = newSnapdClientImpl

func newSnapdClientImpl() snappy.SnapdClient {
  return client.New(nil)
}

func getSnappyVersion() string {
  c := newSnapdClient()

  version, err := c.ServerVersion()
  if err != nil {
    return "snapd"
  }

  return "snapd " + version.Version
}

func handleAssertions(w http.ResponseWriter, r *http.Request) {
  // Fetch interesting assertions from client, package up here
//  c := newSnapdClient()  // XXX: why the above? why not just call the func on a client
  c := client.New(nil)
  log.Println("GRABBING ASSERTIONS")

  a, err := c.Known("account", nil)
  if err != nil {
    log.Println("Error retrieving assertion")
  } else {
  log.Println(fmt.Sprintf("chcking assertions length %d", len(a)))

    for _, assert := range a {
      log.Println("Assertion Found")
      log.Println("Assertion Headers:", assert.Headers())
      log.Println("Assertion Body:", assert.Body())
    }
  }
}

type DeviceInfoResponse struct {
  DeviceName string `json:"deviceName"`
  Brand string `json:"brand"`
  Model string `json:"model"`
  Serial string `json:"serial"`
  OS string `json:"operatingSystem"`
  Interfaces []string `json:"interfaces"`
  Uptime string `json:"uptime"`
}


func handleDeviceInfo(w http.ResponseWriter, r *http.Request) {
//  c := newSnapdClient()  // XXX: why the above? why not just call the func on a client?
  log.Println("handleDeviceInfo:")

  c := client.New(nil)
  var info DeviceInfoResponse

  // Server version
  sysInfo, err := c.ServerVersion()
  if err != nil {
    log.Println("handleDeviceInfo: unable to get server version info", err)
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return
  }

  info.OS = sysInfo.OSID + " " + sysInfo.Series

  // Interfaces
  ifaces, err := c.Interfaces()
  if err != nil {
    log.Println("handleDeviceInfo: unable to get interfaces info", err)
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return
  }

  for _, slot := range ifaces.Slots {
    info.Interfaces = append(info.Interfaces, slot.Name)
  }

  // Hostname
  hostname, err := os.Hostname()
  if err != nil {
    log.Println("handleDeviceInfo: unable to get hostname info", err)
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return
  }

  info.DeviceName = hostname

  // Uptime
  var msi syscall.Sysinfo_t
  err = syscall.Sysinfo(&msi)
  if err != nil {
    log.Println("handleDeviceInfo: unable to get uptime info", err)
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return
  }

  info.Uptime = time.Duration(msi.Uptime).String()

  w.Header().Set("Content-Type", "application/json")
  enc := json.NewEncoder(w)
  if err := enc.Encode(info); err != nil {
    w.WriteHeader(http.StatusInternalServerError)
    fmt.Fprintf(w, "Error: %s", err)
    log.Print(err)
  }
}

type TimeInfoResponse struct {
  Date string `json:"date"`
  Time string `json:"time"`
  Timezone string `json:"timezone"`
  NTPServer string `json:"ntpServer"`
}

func handleTimeInfo(w http.ResponseWriter, r *http.Request) {
  log.Println("handleTimeInfo:")

  var info TimeInfoResponse

  var dt = time.Now()

  info.Date = dt.Format("_2/1/_2")
  info.Time = dt.Format("3:04PM")
  info.Timezone = dt.Format("MST")
  info.NTPServer = ""

  w.Header().Set("Content-Type", "application/json")
  enc := json.NewEncoder(w)
  if err := enc.Encode(info); err != nil {
    w.WriteHeader(http.StatusInternalServerError)
    fmt.Fprintf(w, "Error: %s", err)
    log.Print(err)
  }
}


func initURLHandlers(log *log.Logger) {
  log.Println("Initializing HTTP handlers...")
  snappyHandler := snappy.NewHandler()
  http.Handle("/api/v2/packages/", snappyHandler.MakeMuxer("/api/v2/packages"))

  http.HandleFunc("/api/v2/device-info", handleDeviceInfo)
  http.HandleFunc("/api/v2/assertions/", handleAssertions)
  http.HandleFunc("/api/v2/time-info", handleTimeInfo)

  http.Handle("/public/", loggingHandler(http.FileServer(http.Dir(filepath.Join(os.Getenv("SNAP"), "www")))))

  if iconDir, relativePath, err := snappy.IconDir(); err == nil {
    http.Handle(fmt.Sprintf("/%s/", relativePath), loggingHandler(http.FileServer(http.Dir(filepath.Join(iconDir, "..")))))
  } else {
    log.Println("Issues while getting icon dir:", err)
  }

  http.HandleFunc("/", makeMainPageHandler())
}

func loggingHandler(h http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    log.Println(r.Method, r.URL.Path)
    h.ServeHTTP(w, r)
  })
}

func getBranding() branding {
  return branding{
    Name:    "Ubuntu",
    Subname: "",
  }
}

func makeMainPageHandler() http.HandlerFunc {
  b := getBranding()
  v := getSnappyVersion()

  return func(w http.ResponseWriter, r *http.Request) {
    data := templateData{
      Branding:     b,
      SnapdVersion: v,
    }

    if err := renderLayout("index.html", &data, w); err != nil {
      log.Println(err)
    }
  }
}

func renderLayout(html string, data *templateData, w http.ResponseWriter) error {
  htmlPath := filepath.Join(os.Getenv("SNAP"), "www", "templates", html)
  if _, err := os.Stat(htmlPath); err != nil {
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return err
  }

  layoutPath := filepath.Join(os.Getenv("SNAP"), "www", "templates", "base.html")
  t, err := template.ParseFiles(layoutPath, htmlPath)
  if err != nil {
    http.Error(w, err.Error(), http.StatusInternalServerError)
    return err
  }

  return t.Execute(w, *data)
}
