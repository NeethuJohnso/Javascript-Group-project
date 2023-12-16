function validatePassword(password) {
  // Password should be 8 characters, contain 1 special character, 1 upper case letter, and 1 number
  var passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  return passwordRegex.test(password);
}

$("#login-form").submit(function (event) {
  event.preventDefault();

  var loginEmail = $("#email").val();
  var loginPassword = $("#password").val();

  // Clear previous error messages
  $("#passwordError").text("");

  if (!validatePassword(loginPassword)) {
    alert("Password should contain 8 characters, 1 special character, 1 upper case letter, and 1 number.");
    return;
  }

  // Simulate login validation with default user
  var storedEmail = "neethu@gmail.com";
  var storedPassword = "Neethujn@123";

  if (loginEmail === storedEmail && validatePassword(loginPassword) && loginPassword === storedPassword) {
    alert("Login successful!");
    window.location.href = "welcome.html";
  } else {
    $("#passwordError").text("Login failed. Please check your credentials.");
  }
});

var passwordInput = $("#password");
var passwordRequirements = $(".password-requirements");

// Slide down password requirements on input focus
passwordInput.focus(function () {
  passwordRequirements.slideDown();
});

// Slide up password requirements on input blur
passwordInput.blur(function () {
  passwordRequirements.slideUp();
});
