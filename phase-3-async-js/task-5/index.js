// Wwe will do multiple sync's waait wait for them to get done
  // lets make a simple function jo delay ke baad value return kre

    function delay(ms,value,shouldFail) {
          return new Promise(function(resolve , reject) {
              setTimeout(function(){
                  if (shouldFail){
                      reject("Error in ",value);
                  } else { 
                     resolve(value);
                  }
                }, ms);
            });
        }
                 

        // time measurement 
        Promise.all([
            delay(2000, "A", false),
            delay(2000, "B", false),
            delay(3000, "C", false)
        ]).then (function(results){
             
             console.log("Results :", results);
              console.timeEnd("Total Time");
        }).catch(function(error){
             console.log("Promise.all Failed :", error);
        });
       

     
