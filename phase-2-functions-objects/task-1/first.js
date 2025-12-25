// making a rest parameter function here
 const sun = (...rest) => {
    let total = 0;
    for (let num of rest){
        total += num;

    }
    return total;
 }
// testing function here 
 console.log("Addition of 5 an 3 is : ", sun(5,3,34,43,4,3));

 // ye rest parameter me jitne bhi arguments ek saath pass kar sakte hai 
 /*
 jese const sum = ( a, b) => {
     return a + b;
 }
 console.log(" sum : ", sum(5,3));
      Output : 8 , 

yahi agr sum ke baad agar rest parameter use krenge to saare aguments ek array me form hoke pass honnge 

ex => 
    const sum = (...rest) => {
        let total = 0;
        for ( let num of rest ){
        total += num;
        }
        return total;
}

  console.log("sum:", sum(4,3,43,4,2,324,34,24));
      Output : 178; */
