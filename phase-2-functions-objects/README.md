# Phase 2: Functions, Objects & OOP JS

**Goal:** JavaScript functions, `this`, objects, prototypes aur classes ko depth me samajhna, taaki aage React/Node ka code readable lage.

---

## 🛠 Setup

- `phase-2-functions-objects/` folder me `npm init -y` (optional but good).
- Har task ke liye `task-x/index.js` banao.
- Code run karne ke liye `node task-x/index.js` use karo.

---

## 📚 Concepts to Learn

### 1. Function Types & Parameters

- Declaration vs expression vs arrow functions.
- Default parameters, rest parameters (`...args`), parameter destructuring.
- Pure functions vs impure functions ka idea.

**📖 Read:**

- MDN – Functions

---

### 2. `this` in JavaScript

- Global context me `this` vs function ke andar `this`.
- Object method me `this` kya point karta hai.
- Arrow functions me `this` lexical hota hai (outer scope se aata hai).

**📖 Read:**

- MDN – `this`

---

### 3. Call, Apply, Bind

- `func.call(thisArg, arg1, arg2)` – direct call with custom `this`.
- `func.apply(thisArg, [args])` – args array form me.
- `func.bind(thisArg)` – new function jiska `this` permanently set.

**📖 Read:**

- MDN – Function.prototype.call / apply / bind

---

### 4. Object Creation Patterns

- Object literal: `{}`
- Factory function: `createUser(name, age)` jo object return kare.
- Constructor function + `new`:

function User(name, age) {
this.name = name;
this.age = age;
}

text

**📖 Read:**

- MDN – Object basics

---

### 5. Prototypes & Prototype Chain

- Har function ka `prototype` object hota hai.
- `object.__proto__` ya `Object.getPrototypeOf(obj)` se chain dekh sakte ho.
- Prototype pe methods rakhne se sab instances share karte hain.

**📖 Read:**

- MDN – Prototypes
- JavaScript Info – Prototypal inheritance

---

### 6. ES6 Classes (Syntax Sugar)

- `class User { constructor(name) {...} method() {...} }`
- `extends` se inheritance, `super()` se parent constructor call.
- Static methods: `static from(obj) { ... }`.

**📖 Read:**

- MDN – Classes

---

### 7. Getters & Setters

- `get` aur `set` keywords se computed properties.
- Validation ya derived values ke liye useful.

**📖 Read:**

- MDN – Getters & setters

---

### 8. Object Destructuring & Shorthand

- Destructuring:

const { name, age } = user;

text

- Property shorthand:

const name = "Ram";
const user = { name }; // { name: "Ram" }

text

**📖 Read:**

- MDN – Destructuring assignment

---

### 9. JSON Basics

- `JSON.stringify(obj)` – object → JSON string.
- `JSON.parse(str)` – JSON string → object.
- API data ke liye essential.

**📖 Read:**

- MDN – JSON

---

## ✅ Tasks (Khud Implement Karo)

### Task 1: Function Playground ✅

- `task-1/index.js`:
  - `add(a, b)`, `subtract(a, b)` normal function declarations.
  - `multiply` function expression, `divide` arrow function banao.
  - `sum(...nums)` rest params ke sath jo sare numbers ka total de.
  - In sab ko different arguments ke sath call karo aur results print karo.

---

### Task 2: `this` Experiments ✅

- `task-2/index.js`:
  - Object `calculator` banao jisme `a`, `b` properties aur `sum()` method ho jo `this.a + this.b` return kare.
  - `const looseSum = calculator.sum;` karke call karo; `this` ka behaviour observe karo.
  - Wahi method arrow function bana ke dekho aur difference comment me likho.

---

### Task 3: Call / Apply / Bind ✅

- `task-3/index.js`:
  - Ek `introduce` function banao:

function introduce(city, country) {
console.log(Hi, I am ${this.name}, from ${city}, ${country});
}

text

  - `person1` aur `person2` objects banao with `name`.
  - `call`, `apply`, `bind` use karke different combinations se `introduce` call karo.

---

### Task 4: Factory vs Constructor ✅

- `task-4/index.js`:
  - Factory function `createUser(name, age)` jo `{ id, name, age, isAdult }` return kare (id auto‑increment).
  - Constructor function `User(name, age)` likho jo same info rakhe.
  - 3–3 users factory aur constructor se bana ke dekhho, difference comment me likho (syntax, `new` keyword, etc.).

---

### Task 5: Prototype Methods ✅

- `task-5/index.js`:
  - Constructor `User(name, age)` likho.
  - `User.prototype.sayHello = function() { console.log("Hello, I am " + this.name); };`
  - 2 instances banao, dono pe `sayHello()` call karo.
  - Verify karo ki method sirf prototype pe hai (`console.log(user1.__proto__.sayHello === user2.__proto__.sayHello)`).

---

### Task 6: Class & Inheritance ✅

- `task-6/index.js`:
  - `class Person { constructor(name, age) { ... } greet() { ... } }`
  - `class Student extends Person { constructor(name, age, rollNo) { super(name, age); ... } }`
  - `Student` instance banao, `greet()` aur koi extra method (jaise `getInfo()`) call karo.
  - Comment me likho ki ye prototypes ka clean syntax hai.

---

### Task 7: Getters & Setters ✅

- `task-7/index.js`:
  - `class BankAccount` jisme private feel ke liye `_balance` property use karo.
  - `get balance()` jo current balance return kare.
  - `set balance(amount)` jo sirf positive numbers accept kare, nahi to error message.
  - Deposit/withdraw methods banao; galat input pe console me error.

---

### Task 8: JSON & Objects ✅

- `task-8/index.js`:
  - `const user = { id: 1, name: "Ram", skills: ["JS", "Node"], active: true };`
  - Isko `JSON.stringify` se string banao, print karo.
  - Fir string ko `JSON.parse` se wapas object banao.
  - Check karo: original aur parsed object deep equal behave karte hain ya nahi (simple `console.log` comparisons).

---

## ➡️ Next Step

Jab:

- Tum `this`, `call/apply/bind`, prototypes, classes ka basic flow explain kar pao,
- Aur upar ke sare tasks likh ke run kar chuke ho,

tab **Phase 3 – Async JS** wale folder me jao aur `README.md` follow karo (event loop, callbacks, promises, `async/await`).
