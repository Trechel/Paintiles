function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation check (you can add your own logic here)
    if (username === 'admin' && password === '12345') {
        alert('Login successful!');
        errorMessage.textContent = 'Login Successful';
        return true; // allow form submission
    } else {
        errorMessage.textContent = 'Invalid username or password!';
        return false; // prevent form submission
    }
}