// we will use setInterval and clearInterval .

/*let count = 0; se start karo.
setInterval se har 1 second "Tick: <count>" print karo.
Jab count === 5 ho jaye to clearInterval se stop karo.
Comment me likho ki agar clearInterval na kare to kya problem ho sakti hai (infinite timers, memory).*/

// step 1 : count variable bna ,or use 0 se initialize kr
let count = 0;
  
 // set interval use krke ek function banayenge jo har 1 sec ka kaam set krega
  const intervalId = setInterval( function (){
       console.log("tick :", count);  // har second tick ko count krega.

        count ++;

        if ( count === 6) { //ye tick ko tick : 1 se 5 tak print krayega fir roke dega
             
            clearInterval(intervalId);
               console.log("Interval Stopped");

        }
  }  , 2000);
// all set 
