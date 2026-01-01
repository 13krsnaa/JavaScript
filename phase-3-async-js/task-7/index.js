/* Task 7: Simple Retry Logic 

 Step 1 =>  async function retry(fn, retries) likhenge
 Step 2 => fn() ko call kare
 Step 4 => Agar fail, max retries tak dubara try kare.
 Step 5 => fakeFetch ko kabhi-kabhi fail hone ke liye modify krenge, retry(() => fakeFetch("/unstable"), 3) se test karenge.*/


 // Step 1 : we will make a function jo kbhi fil hota hai ,kabhi sucess
  function fakeFetch(){
      return new Promise(function (resolve , reject ){
          setTimeout ( function () {
              // 50% sucess ke chance
              if (Math.random () < 0.5){
                 reject("failed");
              } else {
                 resolve("Sucess");
              }
          }, 3000);
      });
  }

   // Step 2 : retru functio bnayenge jisme 1 baar retry karenge

   async function retry(fn){
      try{ 
         // first try
          const result = await fn();
          return result;
      } catch (error) {
         console.log("First try failed , retrying ....");
         // second try
          const result = await fn();
          return result;
      }
   }

   // Step 3  : testing retry function

     retry(fakeFetch)
     .then(function(data){
         console.log("Final result", data);
     })
     .catch(function (err) {
         console.log("final falure :", err);
     });
