Template.question8.events({
    'click #register': function(e) {
        // console.log(e);
        // console.log(e.target.id);
        Session.setPersistent("preference", "set");
        ABTest.finish("Wizard Style");
        // End time
        AB_END_DATE = new Date();
        // record 
        Records.insert({
            ab: AB_CHOICE,
            start: AB_START_DATE,
            end: AB_END_DATE
        });

        Router.go('/landing/signup');
    },
    'click #skip': function(e) {
        // console.log(e);
        // console.log(e.target.id);
        Session.setPersistent("preference", "set");
        Session.setPersistent("register", "skip");
        ABTest.finish("Wizard Style");
        // End time
        AB_END_DATE = new Date();
        // record 
        Records.insert({
            ab: AB_CHOICE,
            start: AB_START_DATE,
            end: AB_END_DATE
        });

        Router.go('/');
    }
});
