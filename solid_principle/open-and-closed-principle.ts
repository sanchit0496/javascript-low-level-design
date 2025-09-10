// without 
class Car{
    private variant: string
    constructor(variant: string){
        this.variant = variant
    }
    getVariant(): void{
        console.log(this.variant)
    }
    start(): void{
        if(this.variant === 'petrol'){
            console.log('petrol start')
        }else if(this.variant === 'ev'){
            console.log('ev start')
        }
    }
}

function main(): void{
    const car = new Car('petrol')
    const car1 = new Car('ev')
    car.getVariant()
    car1.getVariant()
}
main()

//with
// without 
class Car{
    start(): void{}
}

class EV extends Car{
    start(): void{
        console.log('ev')
    }
}

class Petrol extends Car{
    start(): void{
        console.log('petrol')
    }
}


function main(): void{
    const ev = new EV()
    const petrol = new Petrol()
    ev.start()
    petrol.start()
}
main()
