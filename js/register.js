// Wait for the DOM to be loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
	// Get the form and its fields
	const form = document.querySelector("form");
	const firstNameField = document.querySelector("#first_name");
	const lastNameField = document.querySelector("#last_name");
	const dobField = document.querySelector("#d-o-b");
	const emailField = document.querySelector("#email");
	const passwordField = document.querySelector("#password");
	const confirmPasswordField = document.querySelector("#confirm-password");

	// Add event listener for form submit
	form.addEventListener("submit", (event) => {
	  // Prevent the default form submission behavior
	event.preventDefault();

	  // Check if all required fields are filled
	if (!firstNameField.value || !lastNameField.value || !dobField.value || !emailField.value || !passwordField.value || !confirmPasswordField.value) {
		alert("Please fill in all required fields.");
		return;
	}

	  // Check if password and confirm password fields match
	if (passwordField.value !== confirmPasswordField.value) {
		alert("Password and Confirm Password fields do not match.");
		return;
	}

	  // Send a POST request to the server to register the user
	const formData = new FormData(form);
	fetch("php/register.php", {
		method: "POST",
		body: formData,
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.success) {
			// Registration was successful, redirect to login page
				window.location.href = "login.html";
			} else {
			// Registration failed, display error message
			alert(data.message);
			}
		})
		.catch((error) => {
			alert("An error occurred while registering. Please try again later.");
			console.error(error);
		});
	});
});
