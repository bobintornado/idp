Template.question8.events({
    'click #register': function (e) {
        // console.log(e);
        // console.log(e.target.id);
        Session.setPersistent("preference", "set");
        ABTest.finish("Wizard Style");

        Router.go('/landing/signup');
    },
    'click #skip': function (e) {
        // console.log(e);
        // console.log(e.target.id);
        Session.setPersistent("preference", "set");
        Session.setPersistent("register", "skip");
        ABTest.finish("Wizard Style");
        
        Router.go('/');
    }
});