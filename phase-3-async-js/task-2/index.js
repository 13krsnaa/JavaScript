// TASK - 2 : Callback Hell
// here we will do =>
    // 1. create a fakeFetch(url,cb)
    // 2. Random ddelay : 1-2 seconds
    // 3. Random sucess or error
    // 4. Nested Calls: /user => /posts => /comments


function fakeFetch(url, cb){
    const delay = Math.random() * 1 + 5;

    setTimeout(() => {
        if (Math.random() > 0.3){
             cb(null, {data : `Data from ${url}`});
        }
    },delay);



// Nested Calls (Callback Hell)
  fakeFetch("/user",(err,user) => {
     if (err){
          console.log("Error : ", err.message);
          return;
     }

     console.log("User :", user.data);

       fakeFetch("/posts", (err, posts) => {
         if(err){
              console.log("Error : ", err.message);
              return;
         }

         console.log("Posts :", posts.data);
         console.log("Done ");
       });
   });
}

