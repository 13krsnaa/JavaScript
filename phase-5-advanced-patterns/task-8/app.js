// DOM elements
const titleInput = document.querySelector("#titleInput");
const bodyInput = document.querySelector("#bodyInput");
const addBtn = document.querySelector("#addBtn");
const notesList = document.querySelector("#notesList");
const searchInput = document.querySelector("#searchInput");
const themeBtn = document.querySelector("#themeBtn");
const body = document.body;

// Load notes
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Render notes
function renderNotes(list) {
  notesList.innerHTML = "";

  list.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    const h4 = document.createElement("h4");
    h4.innerText = note.title;

    const p = document.createElement("p");
    p.innerText = note.body;

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", () => {
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes(notes);
    });

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(delBtn);

    notesList.appendChild(div);
  });
}

// Add note
addBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const bodyText = bodyInput.value.trim();

  if (title === "" || bodyText === "") return;

  notes.push({ title, body: bodyText });
  localStorage.setItem("notes", JSON.stringify(notes));

  titleInput.value = "";
  bodyInput.value = "";

  renderNotes(notes);
});

// Search notes
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = notes.filter((note) =>
    note.title.toLowerCase().includes(query)
  );

  renderNotes(filtered);
});

// Theme toggle
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  themeBtn.innerText = "Light Mode";
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeBtn.innerText = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeBtn.innerText = "Dark Mode";
  }
});

// Initial render
renderNotes(notes);
