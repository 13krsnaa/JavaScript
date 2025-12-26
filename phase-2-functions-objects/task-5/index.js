// Here we will mae a constrctor user where i will 
function User(name,age) {
    this.name =  this.name;
    this.age = this.age;
}

// 2. here we will use a method prototype

User.prototype.sayhello = function(){
    console.log("Hello, I am ", + this.name);
}

// creating two instances
const user1 = new User("Keshav",19);
const user2 = new User("Krishna",20);

// Call sayHello() both side 
 user1.sayhello();
 user2.sayhello();
 


