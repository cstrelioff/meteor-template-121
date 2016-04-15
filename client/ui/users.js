/*
 * client/ui/users.js
 *
 * Copyright (C) 2016 Christopher C. Strelioff <chris.strelioff@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
Template.users.helpers({
  user: function () {
    return Meteor.users.find({}, {sort: {"createdAt": -1}});
  }
});
