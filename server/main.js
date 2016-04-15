/*
 * server/main.js
 *
 * Copyright (C) 2016 Christopher C. Strelioff <chris.strelioff@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
Meteor.publish("users", function() {
  return Meteor.users.find({}, {fields: {
    profile: false,
    services: false
  }});
});

Meteor.publish("fakedata", function() {
  // sort most recent data to top
  return FakeData.find({}, {sort: {"createdAt": -1}});
});

