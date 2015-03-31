Template.question9.events({
    'click .choice_img': function(e) {
        // console.log(e);
        // console.log(e.target.id);
        var trimed_value = e.target.id.replace(/ /g, '');
        var category = e.target.getAttribute('data-category');
        Session.setPersistent(category, trimed_value);
        // var v = Session.get(category);
        // console.log(category);
        // console.log(v);

        // Special Case for Smoking
        if (category == "Smokingathome") {
            if (e.target.id == "Non-Smoker") {
                Session.setPersistent('Smokingathome', 'No');
            } else {
                Session.setPersistent('Smokingathome', 'Yes');
            };
        };

        // Toggle on/off Selections
        $("img[data-category='" + category + "']").removeClass("selected");
        $(e.target).addClass("selected");
    },
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

        Router.go('/');
    }
});

Template.question9.helpers({
    questionSets: function() {
        var questionSets = [{
            'name': 'Body Clock?',
            'category': 'BodyClock',
            'questions': [{
                src: "/option_icon/nightowl.jpg",
                name: "Night Owl"
            }, {
                src: "/option_icon/early_bird.png",
                name: "Early Bird"
            }, {
                src: "/option_icon/normal_tik.png",
                name: "Normal"
            }]
        }, {
            'name': 'Noise During Sleep?',
            'category': 'Noiseduringsleep',
            'questions': [{
                src: "/option_icon/sleeplog.png",
                name: "Sleep Log"
            }, {
                src: "/option_icon/nzzz.png",
                name: "Normal ZZZ"
            }, {
                src: "/option_icon/cat.jpg",
                name: "Alert Cat"
            }]
        }, {
            'name': 'Having Meals? ',
            'category': 'HavingMeals',
            'questions': [{
                src: "/option_icon/Eat out.jpg",
                name: "Eat Out"
            }, {
                src: "/option_icon/hc.png",
                name: "Home Cooked"
            }, {
                src: "/option_icon/meals.jpg",
                name: "Both"
            }]
        }, {
            'name': 'Sensitivity to Cleanliness ',
            'category': 'SensitivitytoCleanliness',
            'questions': [{
                src: "/option_icon/Very.jpg",
                name: "Very"
            }, {
                src: "/option_icon/ok.png",
                name: "OK"
            }, {
                src: "/option_icon/Not very.png",
                name: "Not Very"
            }]
        }, {
            'name': 'Gender',
            'category': 'Gender',
            'questions': [{
                src: "/option_icon/Female.jpg",
                name: "Female"
            }, {
                src: "/option_icon/Male.png",
                name: "Male"
            }]
        }, {
            'name': 'Smoker?',
            'category': 'Smokingathome',
            'questions': [{
                src: "/option_icon/non-smoker.png",
                name: "Non-Smoker"
            }, {
                src: "/option_icon/smoker.png",
                name: "Smoker"
            }]
        }];

        return questionSets;
    }
});
