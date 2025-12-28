# Phase 3: Async JavaScript – Event Loop, Promises & Async/Await

**Goal:** JavaScript ka asynchronous model samajhna (event loop, callbacks, promises, async/await) aur real‑life async code likhna (APIs, timers, parallel tasks).

---

## 🛠 Setup

- `phase-3-async-js/` folder me (optional) `npm init -y`.
- Har task ke liye `task-x/index.js` banao.
- Node se run karo: `node task-1/index.js` etc.
- Console output ko dhyan se observe karo (order important hai).

---

## 📚 Concepts to Learn

### 1. Synchronous vs Asynchronous JS

- JS single‑threaded hai: ek time pe ek hi line execute hoti hai.
- Synchronous code line‑by‑line chalta hai, async code future me complete hota hai (callback/promise ke through).
- I/O, timers, network requests async hote hain – warna UI ya server block ho jayega.

**📖 Read:**

- MDN – Asynchronous JavaScript

---

### 2. Event Loop, Call Stack & Callback Queue

- Call stack: jahan functions execute hote hain.
- Web APIs / Node APIs: async ka kaam background me karte hain (timer, HTTP request, etc.).
- Callback / microtask queue: jab kaam complete, to callback/promises queue me jate hain; event loop stack khaali hone pe unhe chalata hai.
- Idea: `setTimeout`, `Promise`, normal logs mix karke execution order samjho.

**📖 Read:**

- MDN – Event loop

---

### 3. Callbacks & Callback Hell

- Basic async pattern: function ko ek callback diya jata hai jo baad me call hota hai.
- Nested callbacks se "callback hell" create hota hai – difficult to read/maintain.
- Error‑first callback style: `function (err, result) { ... }`.

**📖 Read:**

- MDN – Callback function

---

### 4. Promises

- Promise ek object hai jo future value represent karta hai: pending → fulfilled / rejected.
- `new Promise((resolve, reject) => { ... })` se create hota hai.
- Consumption: `.then()` success ke liye, `.catch()` error ke liye, `.finally()` cleanup ke liye.

**📖 Read:**

- MDN – Promise

---

### 5. Async/Await

- `async` function hamesha promise return karta hai.
- `await` se promise ko "synchronous style" me likh sakte ho.
- `try/catch` ke sath error handling clean ho jati hai.

**📖 Read:**

- MDN – async function

---

### 6. Promise Combinators

- `Promise.all([...])` – sab promises parallel run, koi fail hua to pura reject.
- `Promise.allSettled([...])` – sab complete hone ka wait, success + failure dono ka result deta hai.
- `Promise.race([...])` – sabse pehla settle hone wala promise result deta hai.

**📖 Read:**

- MDN – Promise.all

---

### 7. Timers & Intervals

- `setTimeout(fn, ms)` – ek baar delay ke baad run.
- `setInterval(fn, ms)` – har ms ms baad repeat; memory leaks se bachne ke liye `clearInterval` jaruri.
- Real use: debouncing/throttling ka base.

**📖 Read:**

- MDN – setTimeout / setInterval

---

### 8. Fetch / HTTP Requests (Basic Idea)

- Browser me `fetch(url)` promise return karta hai.
- Node me fetch (new versions) ya `node-fetch` jaise libs use hoti hain.
- Steps: request → response → `response.json()` → data.

**📖 Read:**

- MDN – Fetch API

---

### 9. Error Handling in Async Code

- Promises: `.catch()` ya `then` ka second argument.
- Async/await: `try { await something(); } catch (err) { ... }`.
- Network failures, invalid JSON, timeout jaisi cheeze handle karna.

**📖 Read:**

- MDN – Error handling in promises

---

## ✅ Tasks (Khud Implement Karo)

### Task 1: Event Loop Order ✅

- `task-1/index.js`:
  - Ye code likho aur pehle output guess karo, fir run karo:

console.log("Start");

setTimeout(() => {
console.log("Timeout 1");
}, 0);

Promise.resolve().then(() => {
console.log("Promise then");
});

console.log("End");

text

Comment me explain karo ki output ka order kyu aisa aaya (call stack, microtask queue, callback queue ka role).

---

### Task 2: Callback-based Async Function ✅

- `task-2/index.js`:
  - `fakeFetch(url, cb)` function banao jo:
    - `setTimeout` se 1–2 sec delay kare.
    - Random chance se error ya success de (jaise `Math.random()`).
    - Agar error: `cb(new Error("Network error"), null)`
    - Agar success: `cb(null, { data: "some data from " + url })`
  - Isko nested tareeke se call karo (pehle `/user`, fir `/posts`), "callback hell" ka structure feel karo.

---

### Task 3: Promise Version ✅

- `task-3/index.js`:
  - Upar wale `fakeFetch` ko promise version me likho:

function fakeFetch(url) {
return new Promise((resolve, reject) => {
// setTimeout + random error / success
});
}

text

- `fakeFetch("/user")` → `.then` me data log karo; `.catch` me error.
- `fakeFetch("/user").then(...).then(...)` chain bana ke do processing steps add karo.

---

### Task 4: Async/Await Refactor ✅

- `task-4/index.js`:
  - `async function getUserAndPosts()` banao:
    - Pehle `await fakeFetch("/user")` se user lao.
    - Fir `await fakeFetch("/posts?userId=...")` se posts lao.
    - `try/catch` me wrap karo, success pe combined result print karo; error pe friendly message.

---

### Task 5: Promise.all Playground ✅

- `task-5/index.js`:
  - Teen promises banao jo different time (1s, 2s, 3s) baad resolve karein.
  - `Promise.all` se unko parallel run karo, total time measure karo (start/end time log).
  - Ek promise me error introduce karo aur dekho `Promise.all` ka behaviour kya hota hai.

---

### Task 6: setInterval & Clear ✅

- `task-6/index.js`:
  - `let count = 0;` se start karo.
  - `setInterval` se har 1 second `"Tick: <count>"` print karo.
  - Jab `count === 5` ho jaye to `clearInterval` se stop karo.
  - Comment me likho ki agar `clearInterval` na kare to kya problem ho sakti hai (infinite timers, memory).

---

### Task 7: Simple Retry Logic ✅

- `task-7/index.js`:
  - `async function retry(fn, retries)` likho jo:
    - `fn()` ko call kare (ye async function / promise returning ho sakta).
    - Agar success, result return kare.
    - Agar fail, max retries tak dubara try kare.
  - `fakeFetch` ko kabhi-kabhi fail hone ke liye modify karo, `retry(() => fakeFetch("/unstable"), 3)` se test karo.

---

### Task 8: Timeout Wrapper ✅

- `task-8/index.js`:
  - `function withTimeout(promise, ms)` likho jo:
    - Ek naya promise return kare.
    - Agar ms ke andar original resolve/reject ho gaya to wahi result de.
    - Warna `"Timeout after <ms> ms"` error ke saath reject kare.
  - `withTimeout(fakeFetch("/slow"), 1000)` jaise calls test karo (delay ko change karke).

---

## ➡️ Next Step

Jab tum:

- Event loop ka order explain kar pao,
- Promises + async/await me rahat se code likh sako,
- Aur upar ke sare tasks run karke samajh jao,

tab **Phase 4 – DOM & Browser JS** wale folder me jao aur wahan ka `README.md` follow karo (DOM tree, events, forms, localStorage, chhote front-end mini projects).
