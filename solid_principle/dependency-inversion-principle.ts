// without 
class Car{
    onStart():void{
        const petrolengine = new PetrolEngine()
        petrolengine.start()
    }
}

class PetrolEngine{
    start(): void{
        console.log('petrol start')
    }
}

function main(): void{
    const car = new Car()
    car.onStart()
}

main() 

// with 
interface Engine{
    start(): void
}

class Car{
    private engine: Engine
    constructor(engine: Engine){
        this.engine = engine
    }
    onStart():void{
        this.engine.start()
    }
}

class PetrolEngine implements Engine{
    start(): void{
        console.log('petrol start')
    }
}
class EV implements Engine{
    start(): void{
        console.log('ev start')
    }
}

function main(): void{
    const petrolengine = new PetrolEngine()
    const ev = new EV()
    const car = new Car(petrolengine)
    const car1 = new Car(ev)

    car.onStart()
    car1.onStart()
}

main() 