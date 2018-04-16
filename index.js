'use strict';
const Funnel = require('broccoli-funnel');
const path = require('path');
const mergeTrees = require('broccoli-merge-trees');
const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-cli-slick',

  blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  },

  treeForVendor: function(tree) {
    let slickTree = fastbootTransform(new Funnel(path.join('node_modules', 'slick-carousel')));

    return new mergeTrees([tree, slickTree]);
  },

  included: function(app) {
    this._super.included(app);

    this.app.import('vendor/slick/slick.css');
    this.app.import('vendor/slick/slick.js');
    this.app.import('vendor/slick/slick-theme.css');
    this.app.import('vendor/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    this.app.import('vendor/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    this.app.import('vendor/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
    this.app.import('vendor/slick/fonts/slick.woff', { destDir: 'assets/fonts' });
    this.app.import('vendor/slick/ajax-loader.gif', { destDir: 'assets' });
  }
};
