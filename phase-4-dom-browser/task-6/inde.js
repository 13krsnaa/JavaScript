// Generator function (function*)
 function*  range(start, end){ 

   

     // jab start end se chota ya equl ho 
      while(start <= end){ 
          // yield = ye value return kro or yhi ruk jao 
           yield start; 
           start ++;
      }
 }
  

 // generator ko call krenge
  // while se generator ko use krenge
  
  const gen = range(3,9);


   let result  = gen.next(); 
    while( result.done === false){ 
        console.log(result.value); 

        result = gen.next();
    }
         
     
      

      // FOR se Generator use krenge 
        for (let num of range(3,9)){
             console.log(num);
             
        }



   