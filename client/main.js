Template.devtank.onCreated(function() {
	console.log('subscribe')
	Meteor.subscribe("userProfiles");
});

Template.devtank.helpers({
	users: function() {
		return Meteor.users.find();
	}
});

Template.devtank.events({
	"click button" : function() {
		var permissions = {
		    requestPermissions: "profile",
		    include_granted_scopes: true,
		    loginStyle: 'redirect' //will work on mobile
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