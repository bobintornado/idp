Template.question2.events({
    'click .choice_img': function (e) {
        // console.log(e);
        console.log(e.target.id);
        Router.go('/landing/3');
    }
});

Template.question2.helpers({
    questions: function() {
        return questionList;
    }
});

var questionList = [{
    src: "/option_icon/nightowl.jpg",
    name: "Night Owl"
}, {
    src: "/option_icon/early_bird.png",
    name: "Early Bird"
}, {
    src: "/option_icon/normal_tik.png",
    name: "Normal"
}];