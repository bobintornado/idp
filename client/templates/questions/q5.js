Template.question5.events({
    'click .choice_img': function (e) {
        // console.log(e);
        console.log(e.target.id);
        var trimed = e.target.id.replace(/ /g,'');
        Session.setPersistent('SensitivitytoCleanliness', trimed);
        console.log(trimed);
        Router.go('/landing/6');
    }
});

Template.question5.helpers({
    questions: function() {
        return questionList;
    }
});

var questionList = [{
    src: "/option_icon/Very.jpg",
    name: "Very"
}, {
    src: "/option_icon/ok.png",
    name: "OK"
}, {
    src: "/option_icon/Not very.png",
    name: "Not Very"
}];