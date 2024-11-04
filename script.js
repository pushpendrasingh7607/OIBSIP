let users = [];

function registerUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if the username is already taken
  if (users.find(user => user.username === username)) {
    alert("Username is already taken. Please choose another.");
    return;
  }

  // Hash and salt the password 
  const hashedPassword = hashPassword(password);

  // Store user information
  users.push({ username, password: hashedPassword });

  alert("Registration successful!");
}

function loginUser() {
  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Find the user by username
  const user = users.find(user => user.username === loginUsername);

  // Check if the user exists and the password is correct
  if (user && comparePasswords(loginPassword, user.password)) {
    // Display secured page
    document.getElementById("securedPage").style.display = "block";
    document.getElementById("loggedInUser").innerText = loginUsername;
  } else {
    alert("Invalid login credentials. Please try again.");
  }
}

function hashPassword(password) {
  // using a basic hash function here 
  return btoa(password);
}

function comparePasswords(inputPassword, hashedPassword) {
  return btoa(inputPassword) === hashedPassword;
}

