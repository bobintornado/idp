Template.room.rendered = function() {
    // Tooltip
    $('a').tooltip({
        show: null
    });
    // Date Picker
    $('#inputMovein').datepicker();
    $('#inputMoveout').datepicker();
};

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
    },
    photos_with_index: function() {
        if (this.photos != undefined) {
            var photos_with_index = [];
            for (var i = 0; i < this.photos.length; i++) {
                photos_with_index.push({
                    index: i,
                    link: this.photos[i].link
                })
            };
            // console.log(photos_with_index);
            return photos_with_index;
        };
    }
});

Template.room.events({
    'click #putmein': function() {
        if (Meteor.users) {
            this.people_interested.push(Meteor.user().emails[0].address);

            Rooms.update({
                _id: this._id
            }, {
                $set: {
                    'people_interested': this.people_interested
                }
            });
        } else {
            console.log('user need to login');
        }
    },
    'click #inButton': function() {
        if (Meteor.users) {
            // update the list
            var room = this;
            var moveInDate = $('#inputMovein').val();
            var moveOutDate = $('#inputMoveout').val();
            var id = List.insert({
                'room': this,
                'user': Meteor.userId(),
                'moveInDate': moveInDate,
                'moveOutDate': moveOutDate
            });
            if (id) {
                toastr.success('Successfully expressed interests and add in list!');
            };
        } else {
            console.log('user need to login');
        };
    }
});
