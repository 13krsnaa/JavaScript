// Factory function to create a user object
let factoryId = 1;

const createUser = (name, age) => {
  return {
    id: factoryId++,
    name: name,
    age: age,
    isAdult: age >= 18
  };
};

// Constructor Function 

function user(name, age) {
  this.id = user.nextId++;  // Static counter
  this.name = name;
  this.age = age;
  this.isAdult = age >= 18;
}
user.nextId = 1;

//Creating user with factory function
const user1 = createUser("Keshav", 19);
const user2 = createUser("Krishna", 19);
const user3 = createUser("Rio", 17);

console.log(user1);
console.log(user2);
console.log(user3);

//Constructor function user

const user4 = new user("Chico", 22);
const user5 = new user("Jerry", 21);
const user6 = new user("IronFist", 16);

console.log(user4);
console.log(user5);
console.log(user6);

//TAsk Completed
