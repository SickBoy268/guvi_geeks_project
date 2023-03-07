$(document).ready(function() {
	$('.registerBtn').click(function() {
		// Get form data
		var Name = $('.name').val();
		var email = $('.email').val();
		var password = $('.password').val();
        var confirm_password = $('.confirm-password').val();
        
        if (password !== confirm_password) {
            $('#error-message').html('Passwords do not match');
            return;
        }

// Send data to server using AJAX
$.ajax({
	url: 'php/register.php',
	type: 'POST',
		data:{
				Name: Name,
				email: email,
				password: password
			},
			success: function(response) {
				// Handle successful response from server
				$('#message').html(response);
			},
			error: function() {
				// Handle error response from server
				$('#message').html('Error occurred while registering');
			}
		});
	});
});