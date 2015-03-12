Template.contactBox.helpers({
	contacts: function () {
		return Meteor.users.find().fetch();
	}
});