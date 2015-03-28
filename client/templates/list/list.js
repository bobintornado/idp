Template.list.helpers({
    userList: function() {
        return List.find();
    }, 
    hasList : function () {
    	return List.find().count() > 0 ? true: false;
    }
});