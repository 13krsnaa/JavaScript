// Task 3: Call / Apply / Bind 

/* 1. make a introduce function jo `this.name`, `city`, aur `country` ko print kare ek string me 
    kuch aise : (`Hi, I am ${this.name}, from ${city}, ${country}`) */
  
// 2. make person1 and person2 object with name properties

// 3.  `call`, `apply`, `bind` use karke different combinations se `introduce` call karo.
  

 // Step 1 : make the introduction function 
     
     function introduce(city, country){
        return `hi, I am ${this.name}, from ${city}, ${country}`;

     }
 // Step 2 : make person1 and person2 objects
  
      const person1 = { name : "Keshav Saxena"};
      const person2 = { name : "seneorita"};

 // Step 3 : call ,apply , bind use krke different combinations se introduce karenge 

 //Introduce using call method

  console.log("Using Call :", introduce.call(person1,"UP","India")); // hi, I am Keshav Saxena, from UP, India
  console.log("Using Call :", introduce.call(person2, "Miami", "USA")); // hi, I am seneorita , from Miami , USA

// Introduce using apply method
 
   console.log("Using Apply :", introduce.apply(person1,["UP","India"])); // hi, I am Keshav Saxena, from UP , India
   console.log("Using Apply :", introduce.apply(person2,["Miami","USA"])); // hi, I am seneorita, from Miami , USA

   // Inroduce using bind method

   console.log("Using Bind  :", introduce.bind(person1,"UP","India")());
   console.log("Using Bind  :", introduce.bind(person2,"Miami","USA")());

   // task completed
