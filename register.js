const { addUser } = require('./database');

document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username && password) {
    addUser(username, password);
    window.location.href = "login.html";
  } else {
    alert("Please enter a username and password.");
  }
});
