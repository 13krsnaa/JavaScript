// Task 7: String Utilities

// Captle me convert karna 


function toTitleCase(str) {
  // Step 1: string ko space se slipt krke array banao
  // Step 2: then change first letter capital and rest is lowercase for each word
  // Step 3: then join them with space and return final string
  
  return str
    .split(" ") 
    .map(word => { return word. charAt(0).toUpperCase() + word.slice(1).toLowerCase();   })
    .join(" "); 
}

function isPalindrome(str) {
  // Step 1: remove all the spaces
  // Step 2: convert them into lowercase
  // Step 3: split string into array
  // Step 4: reverse them
  // Step 5: then join them
  // Step 6: compare with original
  
  const cleaned = str. replace(/\s/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  
  return cleaned === reversed;
}

console.log("Test 1:");
console.log("Input:   'hello world from js'");
console.log("Output:", toTitleCase("hello world from js"));
console.log("Expected: Hello World From Js\n");

console.log("Test 2:");
console.log("Input:  'javascript is awesome'");
console.log("Output:", toTitleCase("javascript is awesome"));
console.log("Expected: Javascript Is Awesome\n");

