Router.configure({
	layoutTemplate: 'layout'
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