// Task : 3 PROMISE VERSION
// Task 2 ke fakeFetch ko PROMISE version me likhna hai

// Step 1. Promise based fakeFetch 
function fakeFetch(url) {
    return new Promise((resolve , reject ) => {
          const delay = Math.random() * 1000 + 1000; // 1-2 seconds delay
          
          
          setTimeout(() => {
              if (Math.random() > 0.3){
                 resolve({ data: `Data from ${url}`});

              } else {
                reject(new Error("Network error!"));
              }
          } , delay);


        });
}


            // Simple .then / .catch USE
             fakeFetch("/user")
              .then(response => {
                console.log("User response :", response.data);
              })
              .catch(err => {
                console.log("Error:", err.message);

              });


              // Promise  chain 

              fakeFetch("/user")
  .then(response => {
    console.log(" Raw user data:", response.data);
    const user = { name: "Krishna", from: response.data };
    return user; // Step 1 output
  })
  .then(user => {
    console.log("Processed user object:", user);
    return fakeFetch(`/posts?user=${user.name}`); // Step 2: next async call
  })
  .then(postsResponse => {
    console.log(" User posts:", postsResponse.data);
  })
  .catch(err => {
    console.log(" Chain error:", err.message);
  });