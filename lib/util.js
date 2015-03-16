session_matach = function(target) {
    // match follow stuff for now
    var match_list = ['Gender', 'BodyClock', 'Noiseduringsleep', 'SensitivitytoCleanliness', 'HavingMeals', 'Smokingathome'];
    var matches = [];

    console.log('target is ' + target);
    var user = Meteor.users.findOne({username: target});

    // console.log('user is ' + user);
    for (var j = 0; j < match_list.length; j++) {
        var att = match_list[j]
        if (user.profile[att] == Session.get(att)) {
            console.log('user is ' + user[att]);
            console.log('session is ' + Session.get(att));
            matches.push(user.profile[att]);
        };
    };

    console.log(matches);
    
    var result_string = '(matched attributes: ' + matches.toString() + ')';
    // freturn target + result_string;
    if (matches.length > 0) {
        // return user.profile.Name + " " + result_string;
        // console.log(matches);
        return matches;
    };
}