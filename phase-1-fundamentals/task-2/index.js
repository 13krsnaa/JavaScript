// We Will make a simple CLI-calculator 
// here we will take 2 input and a operator , the code will be hard coded for now

// Select any 2 numbers 
const input1 = 10;
const input2 = 4;

// Select the operator fron + , - , * , /
const operator ='*';
 
// Use if else for all the conditions 
if(operator === '+'){
    console.log(input1 + input2);
 } else if(operator === '-'){
    console.log(input1 - input2);
 } else if(operator === '*'){
    console.log(input1 * input2);
 } 
 //make sure to handle the division by zero case

 else if(operator === '/'){
     if (input2 !== 0){
        console.log(input1 / input2);
     }
        else if(input2 === 0){
            console.log("The number cannot be divided by Zero");
        }
     }

    
 