Template.devtank.onCreated(function() {
	Meteor.subscribe("userProfiles");
	Meteor.subscribe("interests");
});

Template.devtank.helpers({
	users: function() {
		return Meteor.users.find();
	}
});

Template.devtank.events({
	"click button.register" : function() {
		var permissions = {
		    requestPermissions: "profile",
		    include_granted_scopes: true,
		    loginStyle: 'popup' //won't work on mobile
		}

		Meteor.loginWithGoogle(permissions,function (err) {
			if (err) console.log('Login: '+err.message);
			else {
  				console.log('Google authorised');
	    	}
		});
	},
	"click .signout" : function(e) {
		e.preventDefault();
		Meteor.logout();
	}
});

Template.editInterests.helpers({
	interest: function() {
		return Interests.findOne();
	}
});