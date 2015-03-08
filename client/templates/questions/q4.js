Template.question4.events({
    'click .choice_img': function (e) {
        // console.log(e);
        console.log(e.target.id);
        Router.go('/landing/5');
    }
});

Template.question4.helpers({
    questions: function() {
        return questionList;
    }
});

var questionList = [{
    src: "/option_icon/Eat out.jpg",
    name: "Eat Out"
}, {
    src: "/option_icon/Home cook.jpg",
    name: "Home Cook"
}, {
    src: "/option_icon/",
    name: "Both"
}];