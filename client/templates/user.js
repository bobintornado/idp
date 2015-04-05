Template.user.helpers({
    percentage: function(email) {
        var matches = session_matach(email);
        console.log(matches);
        var percentage = matches.length / 6;
        var result = percentage * 100 + '%'
        var t = result.slice(0, 4) + '%'
            // result.lastIndexOf('.') + 4
        return t;
    },
    getPictureSrc: function (value) {
    	for (var i = questionSets.length - 1; i >= 0; i--) {
    		for (var j = questionSets[i].questions.length - 1; j >= 0; j--) {
    			var trimed_value = questionSets[i].questions[j].name.replace(/ /g, '');

    			if (value == trimed_value) {
                    console.log(trimed_value);
                    console.log(value);
    				return questionSets[i].questions[j].src;
    			};
    		};
    	};
    },
    rooms: function () {
        // console.log(Rooms.find().fetch());
        return Rooms.find({}, {limit: 3});
    },
    firstPhotoLink: function(photos) {
        return photos[0]['link'];
    }
});

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
        name: "Yes"
    }, {
        src: "/option_icon/smoker.png",
        name: "No"
    }]
}];