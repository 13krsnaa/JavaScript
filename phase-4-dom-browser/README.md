# Phase 4: Advanced JavaScript & Patterns

**Goal:** JavaScript ko deeper level pe samajhna – closures mastery, functional patterns, iterators/generators, aur common design patterns jo real‑world projects me kaam aate hain.

---

## 🛠 Setup

- `phase-4-advanced-patterns/` folder me (optional) `npm init -y`.
- Har task ke liye `task-x/index.js` banao aur `node task-x/index.js` se run karo.

---

## 📚 Concepts to Learn

### 1. Closures – Deep Dive

- Closure = function + uska lexical scope; outer variables ko yaad rakhta hai.
- Use‑cases: private data, function factories, once‑functions, memoization.

**📖 Read:**

- MDN – Closures

---

### 2. Currying & Partial Application

- Currying: `f(a, b, c)` ko `f(a)(b)(c)` style me todna.
- Partial application: kuch arguments fix karke naya function banana.

**📖 Read:**

- JavaScript Info – Currying

---

### 3. Higher‑Order Functions

- Jo function dusre function ko input le ya output me de.
- Examples: map, filter, reduce, custom once, debounce, throttle.

**📖 Read:**

- MDN – Array.prototype.map / filter / reduce

---

### 4. Iterators & Generators

- Iterator protocol: object with `next()` method returning `{ value, done }`.
- Generator function: `function*` + `yield` se iterators likhna easy hota hai.

**📖 Read:**

- MDN – Iterators and generators

---

### 5. Module Patterns

- ES modules: `export` / `import`.
- Old IIFE pattern for private scope.
- Why modules help: encapsulation, reuse, separation of concerns.

**📖 Read:**

- MDN – ES modules

---

### 6. Common Design Patterns (JS Version)

- Module pattern.
- Revealing module pattern.
- Observer / Pub‑Sub pattern.
- Singleton basic idea.

**📖 Read:**

- JavaScript Info – Design patterns overview

---

### 7. Performance & Optimization Basics

- Avoid unnecessary work in loops, caching results (memoization).
- DOM heavy kaam me debouncing/throttling.
- Big O ka basic sense (O(n), O(n²)).

---

## ✅ Tasks (Khud Implement Karo)

### Task 1: Counter Variations (Closures) ✅

- `task-1/index.js`:
  - `createCounter()` likho jo increment, decrement, getValue methods ke sath object return kare, jisme internal count private ho (sirf closure se access).
  - 2 alag counters banao (counterA, counterB) aur verify karo ki dono ka state independent hai.

---

### Task 2: Once Function ✅

- `task-2/index.js`:
  - `once(fn)` higher‑order function banao jo koi bhi function le aur aisa naya function return kare jo sirf pehli call pe fn run kare, baad me previous result hi return kare.
  - Example:

```js
const init = once(() => console.log("Initialized"));
init(); init(); init(); → "Initialized" sirf ek baar print ho.
Task 3: Curry Function ✅
task-3/index.js:

function add(a, b, c) { return a + b + c; } se start karo.

curry(fn) function banao jo curry(add)(1)(2)(3) → 6 de.

Multiple examples ke sath test karo.

Task 4: Custom Map/Filter ✅
task-4/index.js:

myMap(array, fn) aur myFilter(array, fn) functions likho jo original map / filter jaisa behave karein.

Internal implementation me simple for loop use karo.

Compare output with built‑in map / filter.

Task 5: Iterator by Hand ✅
task-5/index.js:

createRangeIterator(start, end) likho jo object return kare with next() method.

next() call pe { value, done } format me values de (start se end tak).

while loop me iterator use karke sare values print karo.

Task 6: Generator Version ✅
task-6/index.js:

Upar wale range ka generator version likho:

js
function* range(start, end) {
  // yield values
}
for...of se generator iterate karo.

Comment me likho ki generator version kitna simple lag raha hai iterator ke comparison me.

Task 7: Simple Pub‑Sub (Observer Pattern) ✅
task-7/index.js:

createPubSub() function banao jo subscribe, unsubscribe, publish methods de:

js
const bus = createPubSub();
const sub = bus.subscribe("order_created", (data) => console.log("Order:", data));
bus.publish("order_created", { id: 1 });
sub.unsubscribe();
Multiple events aur multiple subscribers ke sath test karo.

Task 8: Module Pattern ✅
task-8/index.js:

IIFE se UserStore module banao jisme private users array ho:

js
const UserStore = (function () {
  const users = [];
  function addUser(user) { ... }
  function getUsers() { ... }
  return { addUser, getUsers };
})();
Bahar se sirf returned methods accessible hone chahiye, users direct nahi.

Task 9: Memoization Utility ✅
task-9/index.js:

memoize(fn) function banao jo expensive computation ka result cache kare:

Key ke liye JSON.stringify(args) use karo (simple version).

slowFib(n) jaise function (recursive Fibonacci) ko memoize karke performance difference observe karo (console.time / console.timeEnd se).

Task 10: Debounce / Throttle Logic (Console Simulation) ✅
task-10/index.js:

debounce(fn, delay) likho jo last call ke delay ms baad hi fn run kare.

throttle(fn, delay) likho jo har delay ms me max ek baar fn run hone de.

setInterval se rapid calls simulate karke console output observe karo.

➡️ Next Step
Jab:

Closures, currying, generators, patterns comfortable lagne lagte,

Aur tum in utilities ko khud se likh sako,

tab is JS mastery repo ke upar apna khud ka mini framework / library banane ki planning start karo (jaise chhota state manager, chhota event system, ya utility library) – ye sab concepts us project me use karoge.
```
