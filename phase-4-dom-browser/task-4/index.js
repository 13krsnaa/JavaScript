// Task 4 : Custom Map/Gilter 
 // isme myMap aur myFilter function likhenge jo original jes abehave kre
 // Internal implementation me simple loop use krenge 
 // ab output compare krenge with built in map filter

  
 // We will make custom myMap and myFilter function
     
   //Custom map function
   function myMap(array , fn){ 
    const result = [];
       
      for (let i = 0; i < array.length; i++){  
           // har element pe callback apply 
            result.push(array[i]);

      }
       return result;
   }


     //custom filter function
     function myFilter(array, fn){ 
        const result = [];
         for(let i = 0; i < array.length; i++){ 
            if(fn(array[i],i,array)){ 
                result.push(array[i]);
                }
            }
         
     return result;

        } 
          
        // Testig myMap and myFilter function 
         const array = [23,3,2,33,23,232,3,4,43,4,5,3,3,4,3,2,323,,434,34]; 
         //map
          console.log(myMap(array, x => x*10));
           console.log(array.map(x => x* 10));
            

           // filter
           console.log(myFilter(array, x => x >23));
            console.log( array.filter(x => x > 23));
        