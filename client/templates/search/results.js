Template.results.helpers({
    results: function() {
        // console.log(Rooms.find().fetch());
        // searchDep.depend();
        return Rooms.find({}, {
            sort: [[
                "distance", "asc"
            ], [ 
                "address", "asc"
            ]],
            distance: {
                $lt: 4000
            }
        });
    }
});
