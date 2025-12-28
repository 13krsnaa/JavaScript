


// Task 1 : Even Loop Order

 console.log("Start");

  setTimeout(() => {                // ISME setTimerout Backgrounf me queue hota hai
        console.log("Timeout 1 ",);
        } , 0);

Promise.resolve().then(() => {     // isme promise().resolve().then() Promise ke queue me jata hai
    console.log("Promose then");
     });


console.log("End");

/*  EVENT LOOP PRIORITY (Top to Bottom):
=====================================

1. CALL STACK (Synchronous Code)
   ↓
   console.log("Start")  , Print 1st
   console.log("End")    , Print 2nd
   
2. MICROTASK QUEUE (Promise .then)
   ↓
   Promise.resolve().then()  , Print 3rd
   
3. CALLBACK QUEUE (setTimeout, Events)
   ↓
   setTimeout() , Print 4th
*/


