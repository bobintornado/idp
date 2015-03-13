Template.search.events({
    'click #search_button': function() {
        Blaze.render(Template.results, $('#result').get(0));
    }
});
