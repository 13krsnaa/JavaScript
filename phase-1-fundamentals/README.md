# Phase 1: JS Basics – JavaScript se Strong Foundation

**Goal:** JavaScript ki fundamentals itni solid karni ki aage DOM, React, Node sab easy lage. Yeh pura phase sirf **core language** pe focus hai.

---

## 🛠 Setup

- Node.js install karo: https://nodejs.org
- Verify: terminal / CMD me `node -v` aur `npm -v` run karo.
- Is folder me project shuru karo:
  - `npm init -y`
  - `index.js` banao ya har task ke folder me `index.js` file rakho.

---

## 📚 Concepts to Learn

### 1. Variables & Types ✅

- `let` / `const` use karo; `var` avoid karo (scope issues).
- Primitive types: `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
- Non‑primitive: `object`, `array`, `function`.
- `typeof` se type check karo.

**📖 Read:**

- MDN – Data structures (types)
- MDN – `let`, `const`, `var`

---

### 2. Operators & Control Flow

- Arithmetic: `+ - * / % **`
- Comparison: `==` vs `===` (strict equality use karo), `<`, `>`, `<=`, `>=`.
- Logical: `&&`, `||`, `!`
- Conditions: `if / else if / else`, `switch`, ternary `condition ? a : b`.

**📖 Read:**

- MDN – Expressions and operators
- MDN – `if…else`, `switch`

---

### 3. Arrays (Go slices ka JS version)

- Create: `const arr = [1, 2, 3];`
- Read/Write: `arr[0]`, `arr[1] = 10`.
- Common methods: `push`, `pop`, `shift`, `unshift`, `slice`, `splice`.
- High‑level methods: `map`, `filter`, `reduce`, `find`, `some`, `every`.

**📖 Read:**

- MDN – Array

---

### 4. Objects (Go structs / JS maps feel)

- Basic object: `const user = { id: 1, name: "Ram", age: 20 };`
- Access: `user.name` / `user["name"]`
- Add / update / delete properties.
- Object destructuring: `const { name, age } = user;`

**📖 Read:**

- MDN – Working with objects

---

### 5. Functions & Parameters

- Function declaration: `function add(a, b) { return a + b; }`
- Function expression: `const add = function (a, b) { ... }`
- Arrow function: `const add = (a, b) => a + b;`
- Default parameters: `function greet(name = "Guest") { ... }`
- Rest parameters (variadic feel): `function sum(...nums) {}`.

**📖 Read:**

- MDN – Functions

---

### 6. Scope, Hoisting & Closures

- Scope:
  - Global
  - Function scope
  - Block scope (`let` / `const`)
- Hoisting: declarations upar jati hain, lekin `let/const` temporal dead zone me rehte.
- Closure: function ko apne outer scope ke variables ka access rehta hai, chaahe outer function return ho chuka ho.

**📖 Read:**

- MDN – Scope
- MDN – Closures

---

### 7. Strings & Template Literals

- Normal string: `"hello"` ya `'hello'`.
- Template literal: `` `Hello, ${name}!` ``
- Useful methods: `toUpperCase`, `toLowerCase`, `includes`, `slice`, `split`, `trim`.

**📖 Read:**

- MDN – String

---

### 8. Loops & Iteration

- `for`, `while`, `do...while` basic loops.
- `for...of` arrays/iterables ke liye.
- `for...in` objects ke keys ke liye.
- Practice: normal loop vs `forEach` / `map`.

**📖 Read:**

- MDN – Loops and iteration

---

### 9. Basic Error Handling

- Error create: `new Error("message")`.
- `throw` se error throw karo.
- `try { ... } catch (err) { ... } finally { ... }` use karke handle karo.
- Message clear rakho, jaise `"Age must be a positive number"`.

**📖 Read:**

- MDN – `try…catch`

---

## ✅ Tasks (Khud Implement Karo)

### Task 1: Variables & Types ✅

`task-1/index.js` me:

- `name` (string), `age` (number), `isStudent` (boolean), `score` (undefined), `accountBalance` (null) declare karo.
- Har variable ka value aur `typeof` console me print karo.

---

### Task 2: Simple CLI‑style Calculator ✅

- 2 numbers aur ek operator (`+ - * /`) ke liye variables lo (start me hard‑coded).
- `if/else` ya `switch` se operation select karo.
- Division by zero pe `"Cannot divide by zero"` print karo.
- Har case me result `console.log` karo.

---

### Task 3: Array Practice ✅

- Ek array: `const scores = [45, 67, 32, 89, 90, 55];`
- `map` se har score me `+5` add karo.
- `filter` se sirf `>= 50` wale scores rakho.
- `reduce` se total aur average nikal ke print karo.

---

### Task 4: User Object ✅

- `user` object banao `{ id, name, email, age, isVerified }`.
- `printUser(user)` function likho jo string print kare:

  `User #1: Ram (ram@example.com) - Age: 20 - Verified: true`

- Destructuring use karke `name`, `email`, `age` alag variables me nikalo.

---

### Task 5: Utility Functions ✅

- `isEven(n)` – even number pe `true`, otherwise `false`.
- `maxOfThree(a, b, c)` – sabse bada return kare.
- `greet(name = "Guest")` – `"Hello, <name>!"` return kare.
- In teeno functions ko alag‑alag test cases ke sath call karo.

---

### Task 6: Scope & Closure ✅

`task-6/index.js` me:

function counter() {
let count = 0;
return function () {
count++;
console.log(count);
};
}

const c = counter();
c(); // 1
c(); // 2
c(); // 3

- Comment me explain karo ki closure yahan kaise kaam kar raha hai.

---

### Task 7: String Utilities ✅

- `toTitleCase(str)` likho jo `"hello world from js"` ko `"Hello World From Js"` banaye.
- `isPalindrome(str)` likho jo spaces ignore karke check kare (`"nurses run"` → `true`).
- Dono functions ko multiple inputs ke sath test karo.

---

### Task 8: Safe Divide (Error Handling) ✅

- `function safeDivide(a, b)` likho:

  - Agar `typeof a !== "number"` ya `typeof b !== "number"` ho to `throw new Error("Inputs must be numbers")`.
  - Agar `b === 0` ho to `throw new Error("Cannot divide by zero")`.
  - Warna result return karo.

- `try/catch` me `safeDivide` call karo, success pe result print karo, error pe `"Error: <message>"` print karo.

---

## ➡️ Next Step

Phase 1 ke saare tasks bina dekh ke likh pao aur concepts samajh aa jayein, tab **Phase 2 – Functions & Objects** wale folder me jao aur uska README follow karo.
