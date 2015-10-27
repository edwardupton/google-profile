Accounts.onCreateUser(function(options,user) {
	console.log('creating new user '+user._id)
	// Add Google account info to profile
	var profile = _.pick(user.services.google,
		"name",
		"given_name",
		"picture"
	);
	user.profile = profile;

	// Create basic interests doc
	Interests.insert({
		owner: user._id,
		updated: new Date()
	});

	return user;
});