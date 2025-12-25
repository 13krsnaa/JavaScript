// ### Task 2: THIS Experiment 
//  - Object `calculator` banao jisme `a`, `b` properties aur `sum()` method ho jo `this.a + this.b` return kare.
//  - `const looseSum = calculator.sum;` karke call karo; `this` ka behaviour observe karo.
//- Wahi method arrow function bana ke dekho aur difference comment me likho.

//step 1 : Made the object and returned this.a + this.b here


const calculator = {
    a : 6,
    b : 12,
     sum : function(){
        return this.a + this.b;

     }
}

console.log("Calculator.Sum() : ", calculator.sum()); // 18

//step 2 : isme loosesum object bnake calculator.sum ko call kia , and observed the behaviour


const looseSum = calculator.sum;
 console.log("LoooseSum():", looseSum()); // NaN

 // step 3 : ab arrow function me kia same method ko 


const calculatorArrow = {
    a : 6, 
    b : 4,
    sum : () => {
        this.a + this.b;
    
    }
}

console.log("CalculatorArrow.Sum() : ", calculatorArrow.sum()); //Undefined
 

