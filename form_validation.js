document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous error messages
    let errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => element.remove());

    let isValid = true;

    // Validate Name
    let name = document.getElementById('name').value;
    if (name === '') {
        isValid = false;
        showError('name', 'Name is required');
    }

    // Validate Email
    let email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        showError('email', 'Invalid email format');
    }

    // Validate Password
    let password = document.getElementById('password').value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        isValid = false;
        showError('password', 'Password must be at least 8 characters, including one uppercase letter, one number, and one special character');
    }

    // Validate Confirm Password
    let confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        isValid = false;
        showError('confirmPassword', 'Passwords do not match');
    }

    if (isValid) {
        alert('Registration successful!');
        // Reset the form
        document.getElementById("myForm").reset();
    }
});

function showError(fieldId, message) {
    let field = document.getElementById(fieldId);
    let errorElement = document.createElement('div');
    errorElement.classList.add('error');
    errorElement.innerText = message;
    field.parentNode.insertBefore(errorElement, field.nextSibling);
}
