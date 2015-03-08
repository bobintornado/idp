Meteor.startup(function() {
    load_sample_data();
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