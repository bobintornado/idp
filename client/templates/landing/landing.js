Template.landingPage.events({
    'click #OK_button': function() {
    	var target = '/landing/2';
    	console.log('next page is ' + target); 
    	Router.go(target);
    }
});

Template.landingPage.helpers({
    isSignup: function () {
        return Router.current().url == "/landing/signup";
    }
});
