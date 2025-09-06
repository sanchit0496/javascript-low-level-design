class BankAccount{
    private balance: number = 0;
    constructor(balance: number){
        this.balance = balance
    }

    deposit(money: number): void{
        this.balance += money
    }

    withdraw(money: number): void{
        if(money > this.balance){
            throw new Error('withdrawal amount should be lesser than balance')
        }else{
            this.balance -= money
        }
    }

    getBalance(): number{
        return this.balance;
    }

}

function main(): void{
    const account = new BankAccount(1000);
    // account.deposit(5000) 
    account.withdraw(10000)

    console.log(account.getBalance())
}

main() 