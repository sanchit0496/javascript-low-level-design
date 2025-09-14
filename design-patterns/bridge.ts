// without 
class Car{
    onStart(): void{}
}

class EVCar extends Car{
    onStart(): void{
        console.log('ev car has started')
    }
}

class PetrolCar extends Car{
    onStart(): void{
        console.log('petrol car has started')
    }
}


function main(): void{
    const evcar = new EVCar()
    const petrolcar = new PetrolCar()
    evcar.onStart()
    petrolcar.onStart()
}
main()

//with 
interface Engine{
    onStart(): void 
}

class PetrolEngine implements Engine{
    onStart(): void{
        console.log('petrol engine')
    }
}

class EVEngine implements Engine{
    onStart(): void{
        console.log('ev engine')
    }
}
class Car{

    private engine;
    constructor(engine: Engine){
        this.engine = engine
    }
    startCar(): void {
        this.engine.onStart()
    }
}

class PetrolCar extends Car{
    startCar(): void{
        console.log('petrol car')
    }
}

class EVCar extends Car{
    startCar(): void{
        console.log('ev car')
    }
}

function main(): void{
    const petrolEngine = new PetrolEngine()
    const petrolCar = new PetrolCar(petrolEngine)
    petrolCar.startCar()

    const evEngine = new EVEngine()
    const evCar = new EVCar(evEngine)
    evCar.startCar()
}
main()