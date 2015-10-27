Accounts.onCreateUser(function(options,user) {
	// Add Google account info to profile
	var profile = _.pick(user.services.google,
		"name",
		"given_name",
		"picture"
	);
	user.profile = profile;
	return user;

});