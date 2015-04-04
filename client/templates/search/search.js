Template.search.rendered = function () {
    // Remove modal-backdrop
    // Theoretically I don't need to do this but 
    // But this div keep sticking with the the home page, so i remove the div here by class 
    $('.modal-backdrop').remove();
};

Template.search.events({
    'click #search_button': function() {
        Session.set("search_button", "pressed_once");
    }
});

Template.search.helpers({
    searchIsPressed: function() {
        return Session.get('search_button') == "pressed_once" ? true : false;
    }
});