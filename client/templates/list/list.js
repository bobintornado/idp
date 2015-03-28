Template.list.helpers({
    userList: function() {
        return List.find({'user': Meteor.userId()});
    }, 
    hasList : function () {
    	return List.find({'user': Meteor.userId()}).count() > 0 ? true: false;
    }
});