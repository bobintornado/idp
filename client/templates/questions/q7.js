Template.question7.events({
    'click .choice_img': function (e) {
        // console.log(e);
        console.log(e.target.id);
        Router.go('/landing/8');
    }
});

Template.question7.helpers({
    questions: function() {
        return questionList;
    }
});

var questionList = [{
    src: "/option_icon/",
    name: "Non-Smoker"
}, {
    src: "/option_icon/",
    name: "Smoker"
}];