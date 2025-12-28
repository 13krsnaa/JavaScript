// TASK - 7 Getter and Setter


     // STEP 1: Basic BankAccount Class + Private Property
     // STEP 2: Getter Add Karo (balance read karne ke liye)
     // STEP 3: Setter Add Karo 
     // STEP 4: Deposit Method Add Karo
     // STEP 5: Withdraw Method Add Karo 


          // Step 1 : creating bankaccount class
 
 class BankAccount {
               constructor( initiateBalance = 0 ) {
               this._balance = initiateBalance;
               }
               // Getter Add kia
                  get balance() {
                   return this._balance;
                  }

                // Setter add kia
                  set balance(amount) {
                       if(amount < 0) {
                        console.log("Balance can not be negative");
                        return;
                       }
                   this._balance = amount; 
                  }
 
                // Deposite method add krenge
    deposit(amount){
          if(amount <= 0){
            console.log("Deposite must be Positive");
            return;
           }
       this._balance += amount;
       console.log(`Deposited ${amount}rs. New Balance : ${this._balance}rs.`);
    }


         // Adding Withdrawl Method


    withdrawl(amount){
        if(amount <= 0){
            console.log("Amount must be positive");
            return;
        }
        if (amount > this._balance){
            console.log("Insufficient Funds" );
            return;
        }
    this._balance -= amount;
    console.log(`Withdrawled ${amount}rs.New Balance ${this._balance}rs.`);
    }
}


// Let's test the Getter and Setter method

const account = new BankAccount(100);
console.log("Initial : ", account.balance);

account.deposit(50);
account.withdrawl(30);
account.deposit(300);
account.withdrawl(49);
account.deposit(1000000);
account.deposit(-199);
account.withdrawl(-122);


 