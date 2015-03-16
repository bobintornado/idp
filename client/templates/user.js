Template.user.helpers({
	percentage: function (email) {
		var matches = session_matach(email);
		console.log(matches);
		var percentage = matches.length / 6;
		var result = percentage * 100 + '%'
		var t = result.slice(0, 4) + '%'
		// result.lastIndexOf('.') + 4
		return t;
	}
});