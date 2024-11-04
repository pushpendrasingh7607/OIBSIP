document.getElementById('authForm').addEventListener('submit', login);
document.getElementById('registerForm').addEventListener('submit', register);
document.getElementById('showRegister').addEventListener('click', showRegister);
document.getElementById('showLogin').addEventListener('click', showLogin);
document.getElementById('logoutBtn').addEventListener('click', logout);

function showRegister() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('register-container').style.display = 'none';
}

function register(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert('User already exists!');
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful! Please log in.');
        showLogin();
    }
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('secured-content').style.display = 'block';
        document.getElementById('welcomeUser').textContent = username;
    } else {
        alert('Invalid credentials! Please try again.');
    }
}

function logout() {
    document.getElementById('secured-content').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
