// In the task-3 ,  we will do these things , given below

// 1. we will create a array of numbers 
// 2. we will add 5 in the each array 
// 3. Array filter karke >=50 elements ko array me  store krenge 
// 4.array ke saare elements ka sum karenge
// 5. finally array ka average nikaleneg

// step 1 : create an array of numbers 
 const num = [ 34,34,54,75,87,68,57,97,56,57,86,98,66,78,65];
   console.log("Original Array is :", num);

// sstep 2 : Add 5 in each arrray element 
const addedArray = num.map( num => num + 5);
   console.log("Array after adding  5 : ", addedArray);

// step 3 : filter array elements >=50 
 const filteredArray = addedArray.filter( addedArray => addedArray >=50);
    console.log("Filtered Array ( >=50) :", filteredArray);

// step 4 : sum of all the elements of filteredArray 
  const Total = filteredArray.reduce( (sum, filteredArray) => sum + filteredArray , 0);
    console.log("Sum :", Total );

// step 5  : Average of the array elements 
   const average = Total / filteredArray.length;
     console.log("Average is : ", average);

// end of the task 3



