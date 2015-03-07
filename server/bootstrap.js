Meteor.startup(function() {
    load_sample_data();
    // load_production_data();
});

function load_sample_data() {
    if (Rooms.find().count() === 0) {
        for (var i = 0; i < samples.length; i++) {
            Rooms.insert(samples[i]);
        };
    }
};

var samples = [{
    address: "Bras Basah(S180011), 11 Bras Basah Road",
    distance: 100,
    people_interested: 4,
    photos: [{
        link: "http://upload.wikimedia.org/wikipedia/commons/f/f8/Ellen_H._Swallow_Richards_House_Boston_MA_01.jpg"
    }, {
        link: "http://upload.wikimedia.org/wikipedia/commons/6/6b/A._S._Bradford_House.JPG"
    }]
}, {
    address: "Bugis (S183269) 269 Queen Street",
    distance: 500,
    people_interested: 0
}, {
    address: "Chinatown (S059725) 3 Havelook Square",
    distance: 2000,
    people_interested: 7
}];
