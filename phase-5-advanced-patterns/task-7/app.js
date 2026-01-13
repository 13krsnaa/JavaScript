const button = document.querySelector("#toggleBtn");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  button.innerText = "Switch to Light Mode";
}

button.addEventListener("click", function () {
  // toggle dark class
  body.classList.toggle("dark");

  // check current theme
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    button.innerText = "Switch to Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    button.innerText = "Switch to Dark Mode";
  }
});
