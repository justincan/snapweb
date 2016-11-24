/** @jsx React.DOM */

// snaplist view
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var React = require('react');
var ReactBackbone = require('react.backbone');
var SnaplistItemView = require('../views/snaplist-item.js');
var EmptySnaplistView = require('./empty-snaplist.js');
var SnapTools = require('../common/snaps.js')


function homeComponent() {
  return (
    <div className="row">
      <div className="col-4">
        <img className="u-full-width" src="http://placehold.it/150x100" alt="Placeholder" />
      </div>
      <div className="col-8">
        <h1>Lorem ipsum loror diit</h1>
        <p><strong>Cisco</strong> - C12345 67890</p>
        <p><a href="#">Cisco developer documentation</a></p>
      </div>
    </div>
  );
}

function otherThing(model) {
  return (
    <div className="row">
      <div className="col-11">
        <form action="/search" className="p-search">
          <input className="p-search__field" placeholder="Search" maxlength="255" name="q" value={mode.get('query')} />
          <button type="submit" className="p-search__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 96 96.000001"
              dangerouslySetInnerHTML={{__html:
                '<path color="#000" overflow="visible" fill="none" d="M96 0v96H0V0z"/><path style="line-height:125%;-inkscape-font-specification:Ubuntu;text-align:center" d="M72.396 73.883c.017.02.04.035.057.056.02.025.03.056.05.082zM23.56 73.896l-.107.14c.02-.026.03-.058.05-.083.017-.02.04-.035.058-.057z" font-size="15" font-family="Ubuntu" letter-spacing="0" word-spacing="0" text-anchor="middle" fill="gray"/><path style="line-height:normal;font-variant-ligatures:none;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;block-progression:tb;shape-padding:0;isolation:auto;mix-blend-mode:normal" d="M48 16c-17.65 0-32 14.35-32 32 0 17.648 14.35 31.998 32 31.998s32-14.35 32-32C80 30.35 65.65 16 48 16zm0 3.998c15.488 0 28 12.513 28 28C76 63.49 63.487 76 48 76c-15.486 0-28-12.513-28-28 0-15.49 12.514-28.002 28-28.002z" color="#000" font-family="sans-serif" white-space="normal" overflow="visible" solid-color="#000000" fill="gray"/><path style="line-height:normal;font-variant-ligatures:none;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;text-transform:none;block-progression:tb;shape-padding:0;isolation:auto;mix-blend-mode:normal" d="M88.122 83.88l-4.244 4.24-16.664-16.663 4.244-4.24 16.664 16.662z" color="#000" font-family="sans-serif" white-space="normal" overflow="visible" solid-color="#000000" fill="gray"/>'}}
            />
          </button>
        </form>
      </div>
      <div className="col-1 u-hidden--small">
        <div id="js-view-filters" className="p-view-filters p-view-filters--grid">
            <span id="js-style-grid" className="p-view-filters__icon">
              <svg
                className="filter-icon-grid--active"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="21"
                width="21"
                dangerouslySetInnerHTML={{__html:
                  '<defs><path id="a" d="M0 0h9v9H0z"/><path id="c" d="M0 0h9v9H0z"/><path id="e" d="M0 0h9v9H0z"/><path id="g" d="M0 0h9v9H0z"/></defs><g fill-rule="evenodd" fill="none"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path d="M0 0h9v9H0z" stroke="#333" stroke-width="2" mask="url(#b)"/><g transform="translate(12)"><mask id="d" fill="#fff"><use xlink:href="#c"/></mask><path d="M0 0h9v9H0z" stroke="#333" stroke-width="2" mask="url(#d)"/></g><g transform="translate(0 12)"><mask id="f" fill="#fff"><use xlink:href="#e"/></mask><path d="M0 0h9v9H0z" stroke="#333" stroke-width="2" mask="url(#f)"/></g><g transform="translate(12 12)"><mask id="h" fill="#fff"><use xlink:href="#g"/></mask><path d="M0 0h9v9H0z" stroke="#333" stroke-width="2" mask="url(#h)"/></g></g>'}}
              />

              <svg
                className="filter-icon-grid--inactive"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="21px"
                width="21px"
                version="1.1"
                viewBox="0 0 21 21"
                dangerouslySetInnerHTML={{__html:
                  '<defs><rect id="path-1" y="0" x="0" height="9" width="9"/><rect id="path-3" y="0" x="0" height="9" width="9"/><rect id="path-5" y="0" x="0" height="9" width="9"/><rect id="path-7" y="0" x="0" height="9" width="9"/></defs><g id="Page-1" fill-rule="evenodd" fill="none"><g id="grid-view-unselected"><g id="Group-2"><g id="Rectangle-Clipped"><mask id="mask-2" fill="white"><use xlink:href="#path-1"/></mask><g id="Rectangle" stroke="#979797" stroke-width="2" mask="url(#mask-2)"><rect id="path-1" y="0" x="0" height="9" width="9"/></g></g><g id="Rectangle-Copy-Clipped" transform="translate(12)"><mask id="mask-4" fill="white"><use xlink:href="#path-3"/></mask><g id="Rectangle-Copy" stroke="#979797" stroke-width="2" mask="url(#mask-4)"><rect id="path-3" y="0" x="0" height="9" width="9"/></g></g><g id="Rectangle-Copy-3-Clipped" transform="translate(0 12)"><mask id="mask-6" fill="white"><use xlink:href="#path-5"/></mask><g id="Rectangle-Copy-3" stroke="#979797" stroke-width="2" mask="url(#mask-6)"><rect id="path-5" y="0" x="0" height="9" width="9"/></g></g><g id="Rectangle-Copy-2-Clipped" transform="translate(12 12)"><mask id="mask-8" fill="white"><use xlink:href="#path-7"/></mask><g id="Rectangle-Copy-2" stroke="#979797" stroke-width="2" mask="url(#mask-8)"><rect id="path-7" y="0" x="0" height="9" width="9"/></g></g></g></g></g>'}}
              />
            </span>

            <span id="js-style-row" className="p-view-filters__icon">
              <svg
                className="filter-icon-row--active"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsxlink="http://www.w3.org/1999/xlink"
                height="19px"
                width="23px"
                version="1.1"
                viewBox="0 0 23 19"
                dangerouslySetInnerHTML={{__html: 
                  '<defs><rect id="path-1" y="0" x="0" height="5" width="5"/><rect id="path-3" y="0" x="0" height="5" width="5"/><rect id="path-5" y="0" x="0" height="5" width="5"/></defs><g id="Page-1" fill-rule="evenodd" fill="none"><g id="list-view-selected"><g id="Group"><g id="Rectangle-Clipped"><mask id="mask-2" fill="white"><use xlink:href="#path-1"/></mask><g id="Rectangle" stroke="#333" stroke-width="2" mask="url(#mask-2)"><rect id="path-1" y="0" x="0" height="5" width="5"/></g></g><path id="Line" stroke="#333" d="m8 3h15"/><path id="Line-Copy" stroke="#333" d="m8 10h15"/><path id="Line-Copy-2" stroke="#333" d="m8 17h15"/><g id="Rectangle-Copy-Clipped" transform="translate(0 14)"><mask id="mask-4" fill="white"><use xlink:href="#path-3"/></mask><g id="Rectangle-Copy" stroke="#333" stroke-width="2" mask="url(#mask-4)"><rect id="path-3" y="0" x="0" height="5" width="5"/></g></g><g id="Rectangle-Copy-2-Clipped" transform="translate(0 7)"><mask id="mask-6" fill="white"><use xlink:href="#path-5"/></mask><g id="Rectangle-Copy-2" stroke="#333" stroke-width="2" mask="url(#mask-6)"><rect id="path-5" y="0" x="0" height="5" width="5"/></g></g></g></g></g>'}}
              />

              <svg
                className="filter-icon-row--inactive"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="19"
                width="23"
                dangerouslySetInnerHTML={{__html:
                  '<defs><path id="a" d="M0 0h5v5H0z"/><path id="c" d="M0 0h5v5H0z"/><path id="e" d="M0 0h5v5H0z"/></defs><g fill-rule="evenodd" fill="none"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><path d="M0 0h5v5H0z" stroke="#888" stroke-width="2" mask="url(#b)"/><path stroke="#888" d="M8 3h15"/><path stroke="#888" d="M8 10h15"/><path stroke="#888" d="M8 17h15"/><g transform="translate(0 14)"><mask id="d" fill="#fff"><use xlink:href="#c"/></mask><path d="M0 0h5v5H0z" stroke="#888" stroke-width="2" mask="url(#d)"/></g><g transform="translate(0 7)"><mask id="f" fill="#fff"><use xlink:href="#e"/></mask><path d="M0 0h5v5H0z" stroke="#888" stroke-width="2" mask="url(#f)"/></g></g>'}}
              />
          </span>
        </div>
      </div>
    </div>
  );
}

function renderTitle(model) {
  var canSort = model.get('canSort');
  var canStyle = model.get('canStyle');
  var isHomeActive = model.get('isHomeActive');
  var isAlpha = model.get('isAlpha');

  return (
    <div className="row">
      <h2 className="col-6">{model.get('title')}</h2>
      <div className="row">
        <div className="b-snaplist__actions col-12">
          {canSort &&
            <div className="b-button__group">
              <div id="sortAlpha" className={"b-button b-button_small " + (isAlpha ? "b-button_active" : "")}>
                A-Z
              </div>
              <div id="sortBytes" className={"b-button b-button_small " + (!isAlpha ? "b-button_active": "")}>
                kB
              </div>
            </div>
            }
        </div>
      </div>

      <div id="js-snaplist" className="p-card-deck">
        <div className="card-deck-row-header">
          <div className="card-deck-row-header__item">
            Name
          </div>
          <div className="card-deck-row-header__item">
            Publisher
          </div>
          <div className="card-deck-row-header__item">
          </div>
        </div>

{/*
        <svg
          className="p-list__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 96 96.000001"
          dangerouslySetInnerHTML={{__html: this.props.icon}}
          />
*/}
        {isHomeActive &&
          <div className="p-card">
              <a href="/store">
                  <svg
                    className="p-card__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="125"
                    height="125"
                    dangerouslySetInnerHTML={{__html: '<g fill="none" fill-rule="evenodd"><path fill="#fff" stroke="#CDCDCD" d="M57 113c30.928 0 56-25.072 56-56S87.928 1 57 1 1 26.072 1 57s25.072 56 56 56z"/><path fill="#3EB34F" d="M57.293 90.007c18.067 0 32.714-14.647 32.714-32.714S75.36 24.58 57.293 24.58 24.58 39.225 24.58 57.292s14.646 32.714 32.713 32.714z"/><g fill="#fff"><path d="M57 43.246h.982v27.51H57z"/><path d="M71.246 56.508v.982h-27.51v-.982z"/></g></g>'}}
                  />
              </a>
              <h3 className="p-card__title">
                <a href="/store">Add more snaps for this device</a>
              </h3>
              <footer className="p-card__footer">
                <div className="u-float--right">
                  <a className="p-button--neutral button" href="/store">Browser store</a>
                </div>
              </footer>
            </div>
          }
        </div>
    </div>
  );
}

module.exports = React.createBackboneClass({
  render: function() {
    var model = this.props.model;
    var homeActive = model.get('isHomeActive');
    var haveTitle = model.get('title') != null && model.get('title') != '';

    console.log("model=" + JSON.stringify(model));

    if (homeActive) {
      return (
        <div>
          {homeComponent()}
          <div className="p-strip--light">
            {haveTitle && renderTitle(model)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="p-strip--light">
          {otherThing(model)}
        </div> 
      );
    }
  }
});



/*
module.exports = Marionette.CompositeView.extend({

  childViewContainer: '#js-snaplist',

  initialize : function() {
    // "patch" the model with the snap details browse URI
    this.collection.each(function(snap) {
      snap.set('targetSnapUri', SnapTools.getShowSnapUrlFor(snap))
    });
  },

  template : function(model) {
    return template(model);
  },

  ui: {
    'sortAlpha': '#sortAlpha',
    'sortBytes': '#sortBytes',
    'styleRow': '#js-style-row',
    'styleGrid': '#js-style-grid'
  },

  events: {
    'click @ui.sortBytes':  'sortBytes',
    'click @ui.sortAlpha':  'sortAlpha',
    'click @ui.styleRow':   'styleRow',
    'click @ui.styleGrid':  'styleGrid'
  },

  sortAlpha: function() {
    this.model.set('isAlpha', true);
    this.viewComparator = function(model) {
      return model.get('name');
    };
    this.render();
  },

  sortBytes: function() {
    this.model.set('isAlpha', false);
    this.viewComparator = function(model) {
      return -model.get('installed_size');
    };
    this.render();
  },

  styleGrid: function() {
    this.model.set('isGrid', true);
    this.$('#js-snaplist')
      .removeClass('p-card-deck--row');

    this.$('#js-view-filters')
      .removeClass('p-view-filters--row')
      .addClass('p-view-filters--grid');
  },

  styleRow: function() {
    this.model.set('isGrid', false);
    this.$('#js-snaplist')
      .addClass('p-card-deck--row');

    this.$('#js-view-filters')
      .removeClass('p-view-filters--grid')
      .addClass('p-view-filters--row');

    console.log('done1');
  },

  childView: SnaplistItemView,

  emptyView: EmptySnaplistView

});
*/