Template.room.helpers({
    percentage: function(email) {
        var matches = session_matach(email);
        var percentage = matches.length / 6;
        var result = email.slice(0, email.lastIndexOf("@")) + ': ' + percentage + '% Match'
        return result;
    },
    name: function(email) {
        var trim = email.slice(0, email.lastIndexOf("@"))
        return trim;
    }
});

Template.room.events({
    'click #putmein': function() {
        var list = this.people_interested;
        list.push(Meteor.user().emails[0].address);
        this.people_interested = list;
        Rooms.update(this._id, {
            'people_interested': list,
            'address': this.address
        });
    }
});
