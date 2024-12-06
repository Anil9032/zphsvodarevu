// Admin Authentication and Management
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication (in a real app, this would be server-side)
        if (username === 'admin' && password === 'zphs2818') {
            localStorage.setItem('isAdmin', 'true');
            window.location.href = 'admin.html';
        } else {
            alert('Invalid credentials');
        }
    });

    // Check admin status on admin pages
    if (window.location.pathname.includes('admin.html') && 
        localStorage.getItem('isAdmin') !== 'true') {
        window.location.href = 'index.html#login';
    }
});