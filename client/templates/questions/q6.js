Template.question6.events({
    'click .choice_img': function (e) {
        // console.log(e);
        console.log(e.target.id);
        Router.go('/landing/7');
    }
});

Template.question6.helpers({
    questions: function() {
        return questionList;
    }
});

var questionList = [{
    src: "/option_icon/Female.jpg",
    name: "Female"
}, {
    src: "/option_icon/Male.png",
    name: "Male"
}];