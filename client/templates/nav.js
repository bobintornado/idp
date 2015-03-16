Template.nav.events({
    'click #notification-badge': function(e) {
        // console.log(e);
        // $( "#notification" ).find("span").text("");
        console.log($("#badge").text(''));
    }
});


Template.nav.helpers({
    isSarah: function() {
        // console.log(Meteor.user());
        if (Meteor.user() != undefined) {
            var username = Meteor.user().username;
            if (username == "Sarah@gmail.com") {
                return true;
            } else {
                return false;
            };
        } else {
        	return false;
        }

    }
});
