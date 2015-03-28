Template.landingPage.events({
    'click #OK_button': function() {
    	var ab_page_number = ABTest.start("Wizard Style", ['2', '9']);
    	console.log('page number is' + ab_page_number);
    	var target = '/landing/' + ab_page_number;
    	// console.log('next page is ' + target); 
    	Router.go(target);
    }
});

Template.landingPage.helpers({
    isSignup: function () {
        return Router.current().url == "/landing/signup";
    }
});
