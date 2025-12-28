# 🚀 Phase 5: DOM, Browser APIs & Mini Projects

**Goal:** Browser environment me JavaScript ko master karna – DOM handle karna, events manage karna, forms validate karna, localStorage use karna, aur chhote SPA-style projects banana.

---

## 🛠 Setup

- `phase-5-dom-browser/` ke andar har task ke liye alag folder banao (`task-1`, `task-2`, …).
- Har task folder me:
  - `index.html`
  - `style.css` (optional)
  - `app.js`
- Browser me `index.html` open karke output dekho (VS Code Live Server best hai).

---

## 📚 Concepts to Learn

### 1. DOM (Document Object Model)

- HTML page ko JS me tree structure ki tarah represent karta hai.
- `document.querySelector`, `querySelectorAll` se elements select karna.
- DOM traversal: parent/children, `element.classList`, `innerText`, `innerHTML`.

**📖 Read:**

- MDN – Introduction to the DOM

---

### 2. Events & Event Listeners

- `addEventListener("click", handler)` pattern.
- Event object (`event.target`, `event.preventDefault()` etc.).
- Event bubbling & capturing ka basic idea.

**📖 Read:**

- MDN – Introduction to events

---

### 3. Forms & Validation

- Form submit event, `preventDefault()`.
- Input value read: `input.value`.
- Basic validations: required fields, email format, min length.

**📖 Read:**

- MDN – Form data validation

---

### 4. LocalStorage & SessionStorage

- `localStorage.setItem(key, value)` / `getItem`.
- JSON ke sath store: `JSON.stringify` & `JSON.parse`.
- Difference between localStorage (permanent) vs sessionStorage (tab-based).

**📖 Read:**

- MDN – Web Storage API

---

### 5. DOM Performance & Patterns

- Reflows/repaints minimization – ek sath DOM changes karna.
- Template strings + `innerHTML` vs `createElement`/`appendChild`.
- Simple component-like structure (function that creates/render karta hai).

---

### 6. Single Page App Ka Basic Idea

- Multiple views ko ek hi page me show/hide karna.
- "Router-like" behaviour: hash (`#home`, `#about`) ya simple buttons se sections switch.

---

## ✅ Tasks (Khud Implement Karo)

### Task 1: DOM Selection & Manipulation ✅

- `task-1/`:
  - `index.html` me kuch headings, list, buttons banao.
  - `app.js` me:
    - Different selectors use karo (`getElementById`, `querySelectorAll`).
    - Kisi element ka text aur style change karo.
    - Naya `<li>` item dynamically list me add karo.

---

### Task 2: Click Counter App ✅

- `task-2/`:
  - Simple UI: ek button + ek span jisme count dikh raha ho.
  - Button click pe count increment ho; DOM me updated value show ho.
  - Reset button add karo jo count 0 kar de.

---

### Task 3: Todo App with LocalStorage ✅

- `task-3/`:
  - UI: input field + "Add" button + list of todos.
  - Features:
    - Todo add karo (text empty ho to ignore).
    - Todo delete kar sakte ho.
    - Sare todos localStorage me save ho, page reload pe wapas aa jayein.
  - Structure clean rakho: `addTodo`, `renderTodos`, `saveTodos` jaise functions.

---

### Task 4: Form Validation ✅

- `task-4/`:
  - Registration form: name, email, password, confirmPassword.
  - Submit pe:
    - Sare required fields check karo.
    - Email simple regex se validate karo.
    - Password length >= 6, confirm password match.
    - Error messages niche red text me show karo; sab valid ho tabhi "Form submitted!" message.

---

### Task 5: Search with Debounce ✅

- `task-5/`:
  - UI: search input + ek `<div>` jisme "fake results" dikhte ho.
  - `debounce(fn, delay)` utility likho (Phase-4 se reuse).
  - Input change pe debounced handler call ho jo:
    - Console me "Searching for: <query>" log kare,
    - Aur UI me query text show kare (actual API call abhi nahi).

---

### Task 6: Tabbed Interface / Mini SPA ✅

- `task-6/`:
  - 3 tabs: "Home", "About", "Contact".
  - Har tab ke liye alag `<section>`; sirf active tab ka section visible ho.
  - Tabs pe click karne se active class change ho, section switch ho.
  - Optionally URL hash (`#home`, `#about`, `#contact`) use karo taki refresh pe same tab khule.

---

### Task 7: Theme Toggle (Dark/Light) ✅

- `task-7/`:
  - Toggle button jo dark theme / light theme switch kare (body class toggle).
  - Selected theme localStorage me save ho, page reload pe wahi theme apply ho jaye.

---

### Task 8: Mini Project – Notes App ✅

- `task-8/`:
  - Features:
    - Notes list (title + body).
    - New note add karo.
    - Note delete karo.
    - Sab kuch localStorage me store.
  - Bonus: search box se notes filter karo (title match).

---

## ➡️ Next Step

Jab tum:

- DOM ke sath comfortable ho jao,
- LocalStorage + events + basic SPA behaviour implement kar lo,

tab is JS mastery roadmap ke upar apna larger project decide karo (jaise todo + auth + filters, ya notes + tags, ya expenses tracker). Ye sab phases se sikhe concepts ko combine karega.
