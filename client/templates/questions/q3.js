Template.question3.events({
    'click .choice_img': function(e) {
        // console.log(e);
        // console.log(e.target.id);
        var trimed = e.target.id.replace(/ /g, '');
        Session.setPersistent('Noiseduringsleep', trimed);
        console.log(trimed);
        Router.go('/landing/4');
    }
});

Template.question3.helpers({
    questions: function() {
        return questionList;
    }
});

var questionList = [{
    src: "/option_icon/sleeplog.png",
    name: "Sleep Log"
}, {
    src: "/option_icon/nzzz.png",
    name: "Normal ZZZ"
}, {
    src: "/option_icon/cat.jpg",
    name: "Alert Cat"
}];
