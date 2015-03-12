Template.room.helpers({
	percentage: function (email) {
		var matches = session_matach(email);
		var percentage = matches.length / 7;
		var result = email.slice(0, email.lastIndexOf("@")) + ': ' + percentage + '% Match'
		return result;
	},
	name: function (email) {
		var trim = email.slice(0, email.lastIndexOf("@"))
		return trim;
	}
});

// Template.room.events({
// 	'click #in': function () {
// 		console.log('click');
// 	}
// });