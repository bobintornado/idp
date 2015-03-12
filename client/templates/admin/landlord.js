Template.landlord.helpers({
	rooms: function () {
		// console.log(Rooms.find().fetch());
		return Rooms.find({}, {limit: 5});
	}	
});