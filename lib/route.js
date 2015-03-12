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

Router.route('/landlord', function() {
    this.layout('layout');
    this.render('landlord');
});

var requireLogin = function() {
    // workaround
    // shit logic there
    if (Session.get("signUp") == "yes") {
        Router.go('/');
        this.next();
    } else {
        var path = Router.current().url;
        // console.log("before action path is " + path);

        var patt = new RegExp("\/landing/[2-8]");
        var isQuestions = patt.test(path + "");
        // console.log(isQuestions);
        // go back to landing page if user 1.not login or 2.not filling up questions
        // console.log("session is " + Session.get("preference"));

        // too much shit logic here. re-factor later
        // preference not set AND not question AND not sign up page
        // I don't even know what I am trying to do here

        if (Session.get("preference") != "set" && !isQuestions) {
            // this.render('landingPage');
            // this.render('question1', {to: 'question'});  
            // console.log("back to landing page");
            Router.go('/landing');
        } else {
            // console.log("go to next");
            this.next();
        }
        this.next();
    }
}

// Before login, landing page.
// After login, can go to / directly 
Router.onBeforeAction(requireLogin, {
    except: ['/landing', '/landing/signup', '/landlord']
});