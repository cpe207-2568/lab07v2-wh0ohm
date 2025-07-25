// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const conpassIn = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#resetBtn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

conpassIn.onkeyup = () => {
  conpassIn.classList.remove("is-valid");
  conpassIn.classList.remove("is-invalid");
};

// add callback function for submit button.
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isConpassInOk = false;

  // validate first name
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  // validate last name
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  // validate email
  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  // validate password
  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }
  
  // validate confirm password
  if (conpassIn.value === passwordInput.value) {
    conpassIn.classList.add("is-valid");
    isConpassInOK = true;
  } else {
    conpassIn.classList.add("is-invalid");
  }  

  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPasswordOk &&
    isConpassInOK
  )
    alert("Registered successfully");
};

// add callback function for Reset button.
resetBtn.onclick = () => {
  firstNameInput.value = "";
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");

  lastNameInput.value = "";
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");

  emailInput.value = "";
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");

  passwordInput.value = "";
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");

  conpassIn.value = "";
  conpassIn.classList.remove("is-valid");
  conpassIn.classList.remove("is-invalid");
};
