// Last task of phase 2 JSON & OBJECT
// 1. we will create a original user object
// 2. then , is object ko JSON.stringify se string banayenge , print karenge 
// 3. is string ko JSON.parse se bapas object bnayenge 
// 4 lastly, we will compare them

// Step 1 : (Create a original user object)

  const user = {
       id : 1,
       name : "Keshav Saxena",
       skills : ["JS","MERN Stack","Frontend"],
       active : true
  };


// Step 2 : (JSON.stringify se is object ko string banana)
      
          const userString = JSON.stringify(user);


          // JSON String
          console.log("UserString = " , userString);
          console.log("Type:", typeof userString);


// Step 3 : JSON.PARSE se string ko bapas object banana
         
        const userParsed = JSON.parse(userString);
         
         console.log("userParsed =", userParsed);
         console.log("Type :", typeof userParsed);


// Step 4 : (Compare both of them )

         console.log("ID same ?", user.id === userParsed.if);
         console.log("Name same ?", user.name === userParsed.name);
         console.log("Skills same ?", user.skills === userParsed.skills);
         console.log("Active same ?", user.active === userParsed.active);

        
      

