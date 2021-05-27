let submitBtn = document.querySelector("#registerBtn");

const fullName = document.getElementById("name");
const regID = document.getElementById("regID");
const uniqueKey = document.getElementById("uniqueKey");
const email = document.getElementById("email");

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validateInputs();
});

const validateInputs = () => {
  const nameVal = fullName.value;
  const regIDVal = regID.value;
  const uniqueKeyVal = uniqueKey.value;
  const emailVal = email.value;
  const password1Val = password1.value;
  const password2Val = password2.value;

  // Full Name
  if (nameVal.trim() === "" || !validateFullName(nameVal)) {
    setError(fullName, "Invalid Name !");
  } else setSuccess(fullName);

  // Registration ID
  if (regIDVal.trim() === "" || !validateRegID(regIDVal)) {
    setError(regID, "Invalid Reg. ID");
  } else setSuccess(regID);

  // Unique Key (6 digit numeric)
  if (uniqueKeyVal.trim() === "" || !validateUniqueKey(uniqueKeyVal)) {
    setError(uniqueKey, "Key cannot be empty");
  } else setSuccess(uniqueKey);

  // Email ID
  if (emailVal.trim() === "" || !validateEmail(emailVal)) {
    setError(email, "Invalid email ID");
  } else setSuccess(email);

  // Password
  if (password1Val.trim() === "" || !password1Val) {
    setError(password1, "Password cannot be empty");
  } else if (password1Val.trim().length < 8) {
    setError(password1, "Password too short");
  } else if (password1Val.trim().length > 20) {
    setError(password1, "Password too long");
  } else setSuccess(password1);

  // Confirm Password
  if (password2Val.trim() === "" || !password2Val) {
    setError(password2, "Password cannot be empty");
  } else if (password1Val !== password2Val) {
    setError(password2, "Passwords do not match");
  } else setSuccess(password2);
};

const setError = (node, message) => {
  const nodeParent = node.parentElement;
  const errorComponent = nodeParent.querySelector("small");

  node.classList.add("error");

  errorComponent.innerText = message;
  errorComponent.style.visibility = "visible";
};

const setSuccess = (node) => {
  node.classList.remove("error");
  node.classList.add("success");

  const nodeParent = node.parentElement;
  const errorComponent = nodeParent.querySelector("small");
  errorComponent.style.visibility = "hidden";
};

function validateFullName(fullName) {
  const re = /^[A-Za-z]+$/;

  return re.test(fullName);
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validateUniqueKey(key) {
  const re = /\b\d{6}\b/;

  return re.test(key);
}

function validateRegID(regID) {
  const re = /^[a-zA-Z0-9]*$/;

  return re.test(regID);
}
