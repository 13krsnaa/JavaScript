// we will use multiple selectors
const heading = document.getElementById("heading");
heading.innerText = "I changed the heading";

const listItems = document.querySelectorAll("li");
listItems.forEach((list) => (list.innerText = "I changed the list"));
list.style.color = "red";

// lest create a button which will increase the count
let count = 0;
const increment = document.getElementsByClassName("increase");
const decrease = document.getElementById("decrease");
const countelement = document.getElementById("count");

increment.addEventListener("click", () => {
  count++;
  countelement.innerText = count;
});

decrease.addEventListener("click", () => {
  count--;
  countelement.innerText = count;
});
