Meteor.publish("userProfiles", function () {
	console.log('publishing')
	if (!this.userId) return [];
	
	var cursor =  Meteor.users.find({},
		{fields: {
		  'profile.name': 1,
		  'profile.picture': 1
		}
	});
	console.log('publishing '+cursor.count());
	return cursor;
});

Meteor.publish("interests",function() {
	return Interests.find({owner: this.userId});
})