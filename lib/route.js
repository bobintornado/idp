Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function() {
    // this.layout('layout');
    this.render('search');
});

Router.route('/landing', function() {
    this.layout('landingPage');
    this.render('question1', {
        to: 'question'
    });
});

Router.route('/landing/signup', function() {
    this.layout('signup');
    this.render('signup');
});

Router.route('/landing/:page', function() {
    this.layout('landingPage');
    var page = this.params.page;
    var tempalteName = "question" + page;
    // console.log('render page ' + tempalteName);
    this.render(tempalteName, {
        to: 'question'
    });
});

Router.route('/room/:_id', {
    name: 'room',
    data: function() {
        return Rooms.findOne(this.params._id);
    }
});

Router.route('/users/:email', function() {
    this.layout('layout');
    this.render('user', {
        data: function() {
            return Meteor.users.findOne({
                username: this.params.email
            });
        }
    });
});

// mock up messages 
Router.route('/messages', function() {
    this.layout('layout');
    this.render('message');
});

Router.route('/list', function() {
    this.layout('layout');
    this.render('list');
}, {
    name: 'list'
});

Router.route('/landlord', function() {
    this.layout('layout');
    this.render('landlord');
});

var requireLogin = function() {

    // 

    var path = Router.current().url;

    // Manual fix
    if (Meteor.user() != undefined) {
        if (path == '/messages') {
            Router.go('/messages');
            this.next();
            return;
        };
        if (path == '/landing') {
            Router.go('/');
            this.next();
            return;
        };
        if (path == '/landing/8') {
            Router.go('/');
            this.next();
            return;
        };
        this.next();
        return;
    };

    // manual exception handle
    if (Session.get('register')) {
        this.next();
        return;
    };


    // console.log("before action path is " + path);

    var patt = new RegExp("\/landing/[2-8]");
    var isQuestions = patt.test(path + "");
    // console.log(isQuestions);
    if (isQuestions) {
        this.next();
        return;
    };

    if (path == '/landlord') {
        this.next();
        return;
    };

    var roomReg = new RegExp("\/room/.*");
    var isRoom = roomReg.test(path + "");

    if (isRoom) {
        this.next();
        return;
    };

    var personReg = new RegExp("\/users/.*");
    var perRoom = personReg.test(path + "");

    if (perRoom) {
        this.next();
        return;
    };

    if (path == '/messages') {
        this.next();
        return;
    };


    // enforce 

    if (Session.get('signUp') == 'Yes') {
        console.log('sign up to /');
        Router.go('/');
        this.next();
        return;
    }

    if (path == '/landing/signup') {
        this.next();
        return;
    };

    if (Session.get('preference') == 'Set' && Session.get('signUp') == 'Yes') {
        Router.go('/');
        return;
    };

    Router.go('/landing');
    this.next();
}

// Default exception method not working here
// Default exception method required route name here
// Need to configure names for routes and re-factor this part 
Router.onBeforeAction(requireLogin);
// except: ['landing', 'landing.:page']
