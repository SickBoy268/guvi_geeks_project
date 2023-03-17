// Selecting the form elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.querySelector('.loginBtn');

// Handling form submission
loginBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Validating form inputs
    if (emailInput.value.trim() === '') {
        showError('Please enter your email address');
        return;
    }

    if (passwordInput.value.trim() === '') {
        showError('Please enter your password');
        return;
    }

    // If inputs are valid, attempt to login
    login(emailInput.value, passwordInput.value);
});

// Function to display error messages
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(message));
    const form = document.querySelector('.card-body');
    form.insertBefore(errorDiv, form.childNodes[0]);

    // Remove error message after 3 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Function to attempt login
function login(email, password) {
    // You can use AJAX or fetch to make a request to the server to check if the email and password are valid
    // For demonstration purposes, I'll just redirect to the profile page
    window.location.href = 'profile.html';
}