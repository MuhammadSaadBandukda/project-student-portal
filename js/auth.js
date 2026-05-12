document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const studentId = document.getElementById('studentId').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('error');

    if (studentId === '' || password === '') {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        
        // Simulate login by storing ID as username
        localStorage.setItem('studentId', studentId);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    }
});
