// TASK-9 Memory Utility

// ye slow funcion ka result check krta hai
function memorize(fn) {
  const cache = {}; //cahche private object
  return function (...args) {
    const key = JSON.stringify(args); // ye arguments ko string me convert krega

    // agar result pehle se cache me hai
    if (cache[key]) {
      return cache[key]; // direct cache result
    }

    const result = fn(...args);
    cache[key] = result; // result cache me add hoga
    return result;
  };
}

// slow function
function slowFib(n) {
  if (n <= 1) return;
  return slowFib(n - 1) + slowFib(n - 2); // same calculation baar bar hoti hai (expensive)
}

// without memorization
console.time("Normal Fib");
console.log(slowFib(35)); // time taking
console.timeEnd("Normal Fib");

// With memorization
const fastFib = memorize(slowFib);

console.time("Memorized Fib");
console.log(fastFib(35)); // ye fast hoga
console.timeEnd("Memorized Fib");
