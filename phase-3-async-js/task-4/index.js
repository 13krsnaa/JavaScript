//  Ye ek normal function hai
// Ye 2 second baad data return karega
function fakeFetch() {

  // Promise banaya
  return new Promise(function (resolve) {

    // setTimeout ek delay lagata hai
    setTimeout(function () {

      // 2 second baad yahan aayega
      resolve("User data mila");

    }, 2000);

  });
}


//  Ye async function hai
// async likhne ka matlab:
// is function ke andar await use kar sakte hain
async function getData() {

  // yahan hum fakeFetch chala rahe hain
  // await ka matlab:
  // "jab tak fakeFetch ka result na aaye, ruk jao"
  var result = await fakeFetch();

  // jab result aa jata hai, ye line chalegi
  console.log(result);

}


// Function call
getData();
