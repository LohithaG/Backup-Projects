$(document).ready(function() {

	$("#sign").bootstrapValidator({
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			username : {
				validators : {
					regexp : {
						regexp : /^[A-Za-z0-9@.\s]+$/,
						message : 'please enter numbers and letters'

					},
					notEmpty : {
						message : 'Please supply your orderId'
					}
				}
			},
			password : {
				validators : {
					regexp : {
						regexp : /^[A-Za-z0-9\s]+$/,
						message : 'please enter numbers and letters'

					},
					notEmpty : {
						message : 'Please supply your password'
					}
				}
			},

		},

	})

})