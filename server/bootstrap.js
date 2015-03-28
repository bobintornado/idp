Meteor.startup(function() {
    load_sample_data();
    load_users_data();
    // load_production_data();
});

function load_sample_data() {
    if (Rooms.find().count() === 0) {
        for (var i = 0; i < ROOMS.length; i++) {
            Rooms.insert(ROOMS[i]);
        };
    };
    if (PPL.find().count() === 0) {
        for (var i = 0; i < USERS.length; i++) {
            PPL.insert(USERS[i]);
        };
    };
};

function load_users_data() {
    if (Meteor.users.find().count() === 0) {
        for (var i = 0; i < USERS.length; i++) {
            var option = {};
            option.username = USERS[i]['Name'] + '@gmail.com';
            option.email = USERS[i]['Name'] + '@gmail.com';
            option.password = USERS[i]['Name'];
            option.profile = USERS[i];
            Accounts.createUser(option);
        };
    };
};
