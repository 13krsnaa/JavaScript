// we will make a curry function and test it with multiple arguments 

  // normal function
   function add(a,b,c){
      return a + b + c; 
   }

   // curring function
    function curriedAdd(a){
          return function (b){ 
             return function (c){ 
                 // yha pe original function call krenge
                  return  a + b + c;

             };

          };
    };


    //testing
 
     console.log(curriedAdd(1)(2)(3));
      console.log(curriedAdd(43)(34)(2323));
       
      