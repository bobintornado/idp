Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/landing', {
	name: 'landingPage'
});

Router.route('/', {
	name: 'search'
});

Router.route('/person', {
	name: 'people'
});

Router.route('/room/:_id', { 
	name: 'room',
	data: function() { return Rooms.findOne(this.params._id); }
});

Router.route('/person/:_id', {
	name: 'person'
});

Router.route('/preference', {
	name: 'preference'
});



var requireLogin = function() { 
  if (! Meteor.user()) {
   // If user is not logged in render landingpage
   this.render('landingPage'); 
 } else {
   //if user is logged in render whatever route was requested
   this.next(); 
 }
}

// Before login, landing page.
// After login, can go to / directly 
Router.onBeforeAction(requireLogin, {except: ['landing']});


