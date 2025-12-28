//Ye code likho aur pehle output guess karo, fir run karo:
//console.log("Start");
//setTimeout(() => { console.log("Timeout 1"); }, 0);
//Promise.resolve().then(() => { console.log("Promise then"); });
//console.log("End");


// Let's Write the code

 console.log("Start");

  setTimeout(() => {                // ISME setTimerout Backgrounf me queue hota hai
        console.log("Timeout 1 ",);
        } , 0);

Promise.resolve().then(() => {     // isme promise().resolve().then() Promise ke queue me jata hai
    console.log("Promose then");
     });


console.log("End");



