Interests = new Mongo.Collection('interests');

Interests.allow({
	insert: function(userID,doc) {
		return (userID && doc.owner === userID);
	},
	update: function(userID,doc) {
		return (userID && doc.owner === userID);
	}
});

Interests.attachSchema(new SimpleSchema({
	owner: {
		type: String
	},
	updated: {
		type: Date
	},
    hobbies: {
        type: [String],
        label: "Your hobbies",
        optional: true,
        max: 50
    },
    pet: {
        type: String,
        label: "Your favourite pet",
        optional: true,
        max: 50
    },
    movie: {
    	type: String,
    	label: "Your favourite movie",
    	optional: true,
    	max: 100
    }
}));