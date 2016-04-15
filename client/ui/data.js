/*
 * client/ui/data.js
 *
 * Copyright (C) 2016 Christopher C. Strelioff <chris.strelioff@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
Template.data.helpers({
  datapts: function () {
    return FakeData.find({}, {sort: {"date": -1}});
  },
});

Template.data.events({
  "submit .js-add-data": function(event) {
    event.preventDefault();

    // get description and call method
    var desc = event.target.description.value;
    Meteor.call("add_data", desc);

    // clear field
    event.target.description.value = '';
  },
});
