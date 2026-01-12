const form = document.querySelector("#form");
const Name = document.querySelector("#Name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpass = document.querySelector("#confirmpass");
const button = document.querySelector("#button");
const sucess = document.querySelector("#sucess");
const nameErr = document.querySelector("#nameErr");
const emailErr = document.querySelector("#emailErr");
const passErr = document.querySelector("#passErr");
const confirmpassErr = document.querySelector("#confirmpassErr");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // clear old messages
  nameErr.innerText = "";
  emailErr.innerText = "";
  passErr.innerText = "";
  confirmpassErr.innerText = "";
  sucess.innerText = "";

  let valid = true;

  //name check
  if (Name.value.trim() === "") {
    nameErr.innerText = "Name is required";
    valid = false;
  }
  //email check
  if (email.value === "") {
    emailErr.innerText = "E-Mail is required";
    valid = false;
  } else if (!email.value.includes("@")) {
    emailErr.innerText = "Invalid E-Mail";
    valid = false;
  }

  //password check
  if (password.value.length < 6) {
    passErr.innerText = "Password must be at least 6 characters";
    valid = false;
  }

  //confirm password
  if (password.value !== confirmpass.value) {
    confirmpassErr.innerText = "Passwords do not match";
    valid = false;
  }

  //finnal sucess
  if (valid) {
    sucess.innerText = "CONGRATULATIONS !!! Form Submitted";
    form.reset();
  }
});
