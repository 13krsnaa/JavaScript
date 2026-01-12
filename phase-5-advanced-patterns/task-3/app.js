// DOM elements
const input = document.querySelector("#todoInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

// page load pe purane todos dikhao
list.innerHTML = localStorage.getItem("todos") || "";

// Add button click
button.addEventListener("click", function () {
  // input value uthao
  const text = input.value;

  // empty hai to kuch mat karo
  if (text === "") return;

  // new list item banao
  const li = document.createElement("li");
  li.innerText = text;

  // delete button
  const del = document.createElement("button");
  del.innerText = "X";

  // delete click
  del.addEventListener("click", function () {
    li.remove();
    localStorage.setItem("todos", list.innerHTML);
  });

  // page pe lagao
  li.appendChild(del);
  list.appendChild(li);

  // localStorage me save
  localStorage.setItem("todos", list.innerHTML);

  // input clear
  input.value = "";
});
