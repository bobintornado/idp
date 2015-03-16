// within = 4000;
// searchDep = new Deps.Dependency;

Template.search.events({
    'click #search_button': function() {
        // Blaze.render(Template.results, $('#result').get(0));
        Session.set("search_button", "pressed_once");
        // console.log('value is ' + $('#distanceInput').val());
        // Session.set('within', $('#distanceInput').val());
        // within = $('#distanceInput').val();
        // console.log('')
        // searchDep.changed();
    }
});

Template.search.helpers({
    searchIsPressed: function() {
        return Session.get('search_button') == "pressed_once" ? true : false;
    }
});