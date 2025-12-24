// we have to create a user object with the details
// 1. create the user object with id , name , age , email
// 2. make the function to print the user details like => `User #1: Ram (ram@example.com) - Age: 20 - Verified: true`
// 3.  distract name email in variables from user object using destruction


// step 1 : Create the user object 
const user = {
    id : 1,
    name : "Keshav Saxenna",
    age : 19,
    email : "saxenakrishna914@gmail.com",
    IsVerified : true
}

// Step 2 make the function to print the user object like => `User #1: Ram (ram@example.com) - Age: 20 - Verified: true`
 
  function printuserdetails(user){
    console.log( `user #${user.id} : ${user.name} (${user.email}) - Age: ${user.age} - Verified: ${user.IsVerified}`);
  }
    // calling the function
    printuserdetails(user);

// step 3 : destruct name , E-mail , age using destruction
 
  const { name , email , age } = user;
    console.log("Name : ",name);
    console.log("Age :", age);
    console.log("E-mail :", email);
     
// End of the task 4
