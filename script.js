document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    document.getElementById('searchButton').addEventListener('click', function() {
        const searchInput = document.getElementById('searchInput').value;
        if (searchInput) {
            alert('Search for: ' + searchInput);
        } else {
            alert('Please enter a search term.');
        }
    });

    // Join Us button functionality
    document.getElementById('joinButton').addEventListener('click', function() {
        alert('Thank you for your interest! Please sign up to join us.');
    });

    // Login form validation
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!email || !password) {
            alert('Please fill in both fields.');
            event.preventDefault();
        } else {
            alert('Login successful!');
        }
    });
});
