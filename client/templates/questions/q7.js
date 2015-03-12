Template.question7.events({
    'click .choice_img': function (e) {
        // console.log(e);
        // console.log(e.target.id);
        if (e.target.id == "Non-Smoker") {
            Session.setPersistent('Smokingathome', 'No');    
        } else {
            Session.setPersistent('Smokingathome', 'Yes');    
        }
        console.log(Session.get('Smokingathome'));        
        Router.go('/landing/8');

    }
});

Template.question7.helpers({
    questions: function() {
        return questionList;
    }
});

var questionList = [{
    src: "/option_icon/non-smoker.png",
    name: "Non-Smoker"
}, {
    src: "/option_icon/smoker.png",
    name: "Smoker"
}];