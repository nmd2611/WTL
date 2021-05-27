let saveBtn = document.querySelector("#save");
let cancelBtn = document.querySelector("#cancel");

const phone = document.getElementById("phone");
const email = document.getElementById("email");

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  validateInputs();
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();

  handleCancel();
});

const validateInputs = () => {
  const phoneVal = phone.value;
  const emailVal = email.value;
  const password1Val = password1.value;
  const password2Val = password2.value;

  // Unique Key (6 digit numeric)
  if (phoneVal.trim() === "" || !validatePhone(phoneVal)) {
    setError(phone, "Phone number invalid");
  } else setSuccess(phone);

  // Email ID
  if (emailVal.trim() === "" || !validateEmail(emailVal)) {
    setError(email, "Invalid email ID");
  } else setSuccess(email);

  // Password
  if (password1Val.trim() === "" || !password1Val) {
    setError(password1, "Password cannot be empty");
  } else if (password1Val.trim().length < 7) {
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
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePhone(key) {
  const re = /\b\d{10}\b/;

  return re.test(key);
}

function validateRegID(regID) {
  const re = /^[a-zA-Z0-9]*$/;

  return re.test(regID);
}

const handleCancel = () => {
  console.log("Hello");
};
