// 1. declare 2 functions: add() and subtract ()
// 2. make 1 function expression for multiply()
// 3. make 1 arrow function for divide()
// 4. 1 rest parameter function for sum(...nums)
// 5. test all with different arguments and print results
 

// Function declaration 

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

// Function expression

const multiply = function(a,b){
     return a * b;
}

// Arrow function

const divide = (a,b) => {
    if( b === 0){
        console.log("Error : Divisible by zero");
        return null;
    }
    return a / b;
}

// Rest parameter is explain in first.js file


//With console.log we can test all the parameters here 
