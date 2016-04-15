/*
 * lib/routes.js
 *
 * Copyright (C) 2016 Christopher C. Strelioff <chris.strelioff@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'home',
  yieldRegions: {
    'navbar-landing': {to: 'header'},
    'home': {to: 'main'}
  }  
});

Router.route('/users', {
  name: 'users',
  yieldRegions: {
    'navbar-users': {to: 'header'},
    'users': {to: 'main'}
  },
  subscriptions: function() {
    return Meteor.subscribe("users");
  },
  actions: function() {
    if (this.ready()) {
      this.render();
    } else {
      this.render('loading');
    }
  }
});

Router.route('/data', {
  name: 'data',
  yieldRegions: {
    'navbar-data': {to: 'header'},
    'data': {to: 'main'}
  },
  subscriptions: function() {
    return Meteor.subscribe("fakedata");
  },
  actions: function() {
    if (this.ready()) {
      this.render();
    } else {
      this.render('loading');
    }
  }
});
