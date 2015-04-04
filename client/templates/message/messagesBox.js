// var messages_sarach_see = [{
//     from: 'Jane',
//     content: 'Hi Sarah!'
// }, {
//     from: 'Jane',
//     content: 'I am Jane, and I am looking for an accommodation in Singapore for my exchange this semester. I saw that you have also expressed interest in this room and we have pretty high lifestyle and interests preference matches! Would you like to consider being roommates?'
// }];

// var messages = [{
//     from: 'Jane',
//     content: 'The landlord asks if we are able to drop by tomorrow at 3.30pm to view the apartment?'
// }, {
//     from: 'Sarah',
//     content: 'Oh sure, shall we meet next to the Control Panel of the mrt station at 3.15pm and walk over together? :)'
// }, {
//     from: 'Jane',
//     content: 'Sure thing! This my contact number: 96389383'
// }, {
//     from: 'Sarah',
//     content: "Mine's 98513701, see you tomorrow :)"
// }];
var arrayDep = new Deps.Dependency;

Template.messagesBox.helpers({
    messages: function() {
        arrayDep.depend();
        return messages_sarach_see;
    },
    fromMe: function(from) {
        if (from == 'Jane') {
            return true;
        };
    }
});

Template.messagesBox.events({
    'click #send': function() {
        var content = $("#input").val();
        // Clear 
        $("#input").val("");
        var message = {
            from: 'me',
            content: content
        };
        messages_sarach_see.push(message);
        arrayDep.changed();
    }
});
