/* Task 8: Timeout Wrapper
 function withTimeout(promise, ms) likho jo:
                Ek naya promise return kare.
                Agar ms ke andar original resolve/reject ho gaya to wahi result de.
                 Warna "Timeout after <ms> ms" error ke saath reject kare.
                 (fakeFetch("/slow"), 1000) jaise calls test karo (delay ko change karke).
*/

//step 1 : simple async function ye 3 sec baad dega
function fakeFetch() { 
     return new Promise( function (resolve){
          setTimeout ( function (){ 
               resolve("Data mil gya");
          }, 3000);
          });
     }
   // Step 2: withTimeout function 
   function withTimeout(promise, ms){
     //ye promise timeout ke liye hai
      const timeoutPromise = new Promise(function (rejectOnly){
                setTimeout(function() {
                   rejectOnly("Timeout ho gya");
                      }, ms);
                    });

                    // return krenge , jo phle complete hoga vohi final result hoga
                      return Promise.race([promise, timeoutPromise]);
                    
        }

         // test 
         withTimeout(fakeFetch(), 2000)
         .then(function (data){
                console.log("sucess :", data);
         })
          .catch(function (error) {
             console.log("Error :", error);
          });

          