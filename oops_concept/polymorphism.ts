interface Payment{
    processPayment(amount: number): void
}

class upiPayment implements Payment{
    processPayment(amount: number): void{
        console.log(`upi payment of amount ${amount}`)
    }
}

class cardPayment implements Payment{
    processPayment(amount: number): void{
        console.log(`card payment of amount ${amount}`)
    }
}


function main(): void{
    const upi = new upiPayment()
    upi.processPayment(4000)
    const card = new cardPayment();
    card.processPayment(2000)
}
main()