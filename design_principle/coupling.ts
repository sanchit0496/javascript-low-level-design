// coupling = one class dependent on another class


// tight as we create the engine ourselves
interface Engine{
    startEngine(): void
}

class PetrolEngine implements Engine{
    startEngine():void{
        console.log('petrol engine is starting')
    }
}

class Car{
    private engine: Engine
    private car: string
    // creating own engine for tight coupling
    
    constructor(car: string){
        this.engine = new PetrolEngine()
        this.car = car
    }
    startCar(): void{
        this.engine.startEngine()
    }

}

function main(): void{
    const bmw = new Car('bmw')
    bmw.startCar()
}
main()


//loose as we are taking engine as an argument

interface Engine{
    startEngine(): void
}

class PetrolEngine implements Engine{
    startEngine():void{
        console.log('petrol engine is starting')
    }
}

class EVEngine implements Engine{
    startEngine():void{
        console.log('EV engine is starting')
    }
}

class Car{
    private engine: Engine
    private car: string
    // creating own engine for tight coupling
    
    constructor(car: string, engine: Engine){
        this.engine = engine
        this.car = car
    }
    startCar(): void{
        this.engine.startEngine()
    }

}

function main(): void{
    const petrolEngine = new PetrolEngine()
    const evEngine = new EVEngine()
    const bmw = new Car('bmw', petrolEngine)
    const mustang = new Car('mustang', evEngine)
    bmw.startCar()
    mustang.startCar()
}
main()