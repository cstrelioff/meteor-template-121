/*
 * server/startup.js
 *
 * Copyright (C) 2016 Christopher C. Strelioff <chris.strelioff@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */
Meteor.startup(function () {
  var users = [],
    user_min = 1,
    user_max = 15;

  if (!Meteor.users.findOne()){
    console.log('-- No data in Meteor.users -- creating some!');
    for (var i = user_min; i <= user_max; i++){
      var email = 'user' + i + '@test.com';
      var username = 'user' + i;
      users[i] = username;
      console.log('Creating user ' + username + ' with password "test123" and email: ' + email);

      Meteor.users.insert({username: username,
        createdAt: new Date(),
        emails :[{address: email, verified: false}],
        services: {password: {'bcrypt': '$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO'}}});
    }
  }

  if (FakeData.find().count() === 0){
    console.log('\n\n-- No data in FakeData -- creating some!');

    for (var i = 1; i < 11; i++) {
      // create random user for fake data
      var rand_index = Math.floor(Math.random() * (user_max - user_min + 1)) + user_min;
      var random_user = users[rand_index];

      // insert into collection
      FakeData.insert({description: 'This is (fake) entry number ' + i,
                       createdBy: random_user,
                       createdAt: new Date()});
    }
  }
});
