//Task 1 : Counter Variations (Closure)

  // Yha ham ek function bnayenge jo increment decrement and getValue methods ke sath object return karega
  // isme internal count private hoga , ye sirf closure se acess hoga
  // 2 alag counters bana (counterA, counterB) aur verify karo ki dono ka state independent hai.


   function createCounter(){

    // function ke andar ke declaration function ke bahar se accessible nhi hote 
    let count = 0; // private variable hai
     return { 

       // ham yaha 3 ccheeze return kara rahe hai , increment , decrement and getValue
        increment : function(){ 
             count++;
        },
        decrement : function(){
             count--;
        }, 
        getValue : function(){
            return count;
        }
     };
   }

   // ab ham 2 alag counters banayenge 
   const counterA = createCounter();
   const counterB = createCounter();
     // counterA ke sath kuch operations karte hai
      counterA.increment();
      counterA.increment()
      console.log("Counter A Value : ", counterA.getValue()); //2 aayega

      counterA.decrement();
      console.log("Counter A Value after decrement :", counterA.getValue());

      // counterB ke sath kuch operations karte hai
      counterB.increment();
      console.log("Counter B Value : ", counterA.getValue()); // 1 aayega
      
           