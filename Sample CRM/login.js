// login.js

function attemptLogin() {
    // Get values from the form
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Check if the username and password are valid (you'd replace this with actual authentication logic)
    if (isValidUser(username, password)) {
        document.getElementById('login-message').textContent = 'Login successful!';
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password';
    }
}

function isValidUser(username, password) {
    // In a real application, you'd compare these against a database of users
    // For now, let's use a simple example
    return username === 'user' && password === 'password';
}
