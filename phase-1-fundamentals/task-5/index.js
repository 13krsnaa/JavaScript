// Here we will make 3 functions 
// 1. make a function isEven which will return true if number is true otherwise false
// 2. make a function maxofthree (a,b,c) which will return the largest number among them
// 3. make a function greet which will return "Hello, <name>!" if name is provided otherwise "Hello, Guest!"
 

 // step 1 : Function 1

function isEven(num){
    return num % 2 === 0;
}
     // calling function isEven
  console.log(isEven(4));
  console.log(isEven(5));
  console.log(isEven(232));
  console.log(isEven(34));
  console.log(isEven(33));

  // step 2 : Function 2 
    function maxofthree( a , b , c ){
        if( a >= c && a >= b){
            return a;
        } else if ( b >= c){
            return b;
        } else {
            return c;
        }
    }

    //calling function maxofthree
    console.log(maxofthree(1,2,3));
    console.log(maxofthree(12,33,53));
    console.log(maxofthree(75,34,76));
    console.log(maxofthree(76,55,86));
    console.log(maxofthree(43,56,87));
    console.log(maxofthree(34,33,23));


// step 3  Function 3
   function greet ( name = "Guest" ){
    return `Hello, ${name}!`;
   }
    // calling function greet 
    console.log(greet("Alice"));
    console.log(greet());
    console.log(greet("java"));
    console.log(greet("kali"));
    console.log(greet("developer"));
    console.log(greet("James Bond"));

// end of the task



  
