Template.contactBox.helpers({
    contacts: function() {
        return Meteor.users.find({}, {
            limit: 5
        }).fetch();;
    }
});
