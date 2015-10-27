AutoForm.hooks({
	updateInterests: {
		onSubmit: function(insertDoc, updateDoc, currentDoc) {
			console.log('trying to submit')
			updateDoc.updated = new Date(),
			updateDoc.owner = Meteor.userId();
			this.done(); // submitted successfully, call onSuccess
		},
		onError: function(formType, error) {
			console.error(error)
		}
	}
})