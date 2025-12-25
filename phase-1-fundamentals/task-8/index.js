// Here we will learn error handeling using try catch block 
//  this code will divide two number safrly and hsndle the error
 
function safedivide(a,b){
    //Here we will check if a and b are numbers 
    // then we will check that b is not zero 
        if( typeof a !== 'number' || typeof b !== 'number' ) {
            throw new Error("Invalid input : Both a and b should be numbers ");
        
        }
        if ( b === 0){
            throw new Error("Division by zero is not allowed");
        }
        return a / b;

    }
// call the functions using try and catch block

try {
    const result = safedivide(10,2);
    console.log("Result is : ", result);

} catch(err) {
    console.log("Error Occured :", err.message);
}

