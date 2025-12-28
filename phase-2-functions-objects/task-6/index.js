// We'll divide this task into 4 steps , here = >
// 1. We will make a person class
// 2. WE will make s student class which will extend person class
// 3. Then we will make a student object 
// 4. In the last step , we will print them all and check, if it is working 

// Step 1 : Making Person class

// Base class :
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
 
    greet(){
        console.log(`Hi,I am ${this.name} and I am ${this.age} year's old.`);
    }
}


// Step 2 : CHILD CLASS => Student (Jo parent se inherit hogi)
class Student extends Person{
     constructor (name , age , rollNo){
        super(name, age);  //Parent (Person) ka constrctor call
        this.rollNo = rollNo;
     }

 
getInfo(){
    console.log(`Student : ${this.name}, Age : ${this.age}, Roll No : ${this.rollNo}`);
}
}



// Student Instance 

const student1 = new Student("Keshav",19,464);

// Calling using Inheritance (greet)

student1.greet(); // From Person

// Calling Using Child method (getInfo)
student1.getInfo();

// Final step => 

console.log("student1.__proto__ === Student.prototype:", student1.__proto__ === Student.prototype);
console.log("Student.prototype.__proto__ === Person.prototype:", Student.prototype.__proto__ === Person.prototype);

// Upar ka proof hai ki 'class' internally prototype chain hi use kar raha hai.
