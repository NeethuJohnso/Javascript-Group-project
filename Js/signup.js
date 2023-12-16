document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var signupFirstName = document.getElementById("firstName").value;
    var signupLastName = document.getElementById("lastName").value;
    var signupEmail = document.getElementById("email").value;
    var signupPassword = document.getElementById("password").value;
    var signupConfirmPassword = document.getElementById("confirmPassword").value;

    // Validate first name and last name (only text)
    var nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(signupFirstName) || !nameRegex.test(signupLastName)) {
      alert("First name and last name should contain only letters.");
      return;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail)) {
      alert("Enter a valid email address.");
      return;
    }

    // Validate password format
    var passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(signupPassword)) {
      alert("Password should contain 8 characters, 1 special character, 1 upper case, and 1 number.");
      return;
    }

    // Validate if password and confirm password match
    if (signupPassword !== signupConfirmPassword) {
      alert("Password and confirm password should match.");
      return;
    }

    alert("Registration successful! Please login with your credentials.");
    window.location.href = "login.html";
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var passwordInput = document.getElementById('password');
  var passwordRequirements = document.querySelector('.password-requirements');

  // Toggle password requirements visibility on input focus
  passwordInput.addEventListener('focus', function () {
    passwordRequirements.style.maxHeight = passwordRequirements.scrollHeight + 'px';
  });

  // Hide password requirements on input blur
  passwordInput.addEventListener('blur', function () {
    passwordRequirements.style.maxHeight = 0;
  });
});
