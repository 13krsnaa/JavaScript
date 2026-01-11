// we will use multiple selectors
const heading = document.getElementById("heading");
heading.innerText = "I changed the heading";

const listItems = document.querySelectorAll("li");
listItems.forEach((list) => (list.innerText = "I changed the list"));
