interface Payment{
    processPayment(amount: number) : void
}

class upi implements Payment{   
    processPayment(amount: number): string{
        return(`upi process of amount ${amount}`)
    }
}

class creditCard implements Payment{
    processPayment(amount: number): string{
        return(`credit card payment of ${amount}`)
    }
}

function main(): void{
    const upiPayment: Payment = new upi()
    const creditCardPayment: Payment = new creditCard() 
    console.log(upiPayment.processPayment(2000))
    console.log(creditCardPayment.processPayment(5000))
}

main()