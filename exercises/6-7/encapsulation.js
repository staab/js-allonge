// Encapsulation and extension are always in tension. Consider the following
// example. Since createAccount uses private variables, you can't add 
// functionality using that data, for example, a withdraw method.

function createAccount(){
    var balance = 0,
        owner = "345";

    return {
        deposit: function deposit(amount, ssn){
            if(ssn !== owner){
                throw new Error("invalid ssn");
            }
            balance += amount;
        },
        getBalance: function getBalance(){
            return balance;
        }
    };
};

function createWithdrawableAccount(){
    var account = createAccount();

    account.withdraw = function withdraw(amount, ssn){
        if(ssn !== owner){
            throw new Error("invalid ssn");
        }
        if(amount > balance){
            throw new Error("There isn't that much in the account");
        }

        balance -= amount;
    };

    return account;
};

account = createWithdrawableAccount();
account.deposit(100, "345");
console.log(account.getBalance() === 100)
// ERROR! those private variables are not defined.
account.withdraw(50);


// The following example solves the extensibility problem, but at the cost of
// making the private variables as public as the rest of it.

function createAccount(){

    return {
        balance: 0,
        owner: "345",
        deposit: function deposit(amount, ssn){
            if(ssn !== owner){
                throw new Error("invalid ssn");
            }
            this.balance += amount;
        },
        getBalance: function getBalance(){
            return this.balance;
        }
    };
};

function createWithdrawableAccount(){
    var account = createAccount();

    account.withdraw = function withdraw(amount, ssn){
        if(ssn !== owner){
            throw new Error("invalid ssn");
        }
        if(amount > this.balance){
            throw new Error("There isn't that much in the account");
        }

        this.balance -= amount;
    };

    return account;
};

account = createWithdrawableAccount();
account.deposit(100);
console.log(account.getBalance() === 100)
// This works
account.withdraw(50);
// But we can do this now!
account.balance = 1000000000000;