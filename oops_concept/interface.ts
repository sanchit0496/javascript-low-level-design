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


// creating a checkout class
class Checkout{
    private paymentGateway: Payment

    constructor(paymentGateway: Payment){
        this.paymentGateway = paymentGateway
    }
     
    setPaymentGateway(paymentGateway: Payment): void{
        this.paymentGateway = paymentGateway
    }

    checkout(amount: number): void{
    const result = this.paymentGateway.processPayment(amount)
    console.log(result)    }

}

function main(): void{
    const upiPayment: Payment = new upi()
    const creditCardPayment: Payment = new creditCard() 

    // console.log(upiPayment.processPayment(2000))
    // console.log(creditCardPayment.processPayment(5000))

    const checkoutService = new Checkout(upiPayment)
    checkoutService.setPaymentGateway(upiPayment)
    checkoutService.checkout(2000)

    checkoutService.setPaymentGateway(creditCardPayment)
    checkoutService.checkout(5000)


}

main()