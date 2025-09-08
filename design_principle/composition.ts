// composition = we cant use inheritance here like we cant extend a class here 


// without 
class Engine{ 
    startEngine(): void {
        console.log('engine starting')
    }
} 

class Car extends Engine{
    start(): void{
        this.startEngine()
        console.log('car starting') 
    }
}

function main(): void{
    const car = new Car()
    car.start()
}
main()

// composition = we cant use inheritance here like we cant extend a class here 


// with 
class Engine{ 
    startEngine(): void {
        console.log('engine starting')
    }
} 

class Car{
    private engine: Engine
    constructor(engine: Engine){
        this.engine = engine
    }
    start(): void{
        this.engine.startEngine()
        console.log('car starting') 
    }
}

function main(): void{
    const engine = new Engine()
    const car = new Car(engine)
    car.start()
}
main()
