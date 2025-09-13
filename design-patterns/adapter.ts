// without 
class Car{
    onStart(): void {}
}

class PetrolCar extends Car{
    keyStart(): void{
        console.log('petrol car')
    }
}

class EvCar extends Car{
    buttonStart(): void{
        console.log('ev start')
    }
}

function main(): void{
    const petrolcar = new PetrolCar()
    const evcar = new EvCar()
    petrolcar.keyStart()
    evcar.keyStart()
}

main()


// with 
interface Engine{
    keyStart(): void
}

class PetrolEngine implements Engine{
    keyStart(): void{
        console.log('petrol engine')
    }
}

class EvEngine{
    buttonStart(): void{
        console.log('ev engine')
    }
}


class EvAdapter implements Engine{
    private evEngine: EvEngine
    
    constructor(evEngine: EvEngine){
        this.evEngine = evEngine
    }

    keyStart(): void{
        console.log('adapter one') 
        this.evEngine.buttonStart()
    }
}

class Car{
    private engine: Engine
    constructor(engine: Engine){
        this.engine = engine
    }
    start(): void{
        console.log('car start')
    }
}

function main(): void{
    const petrol = new PetrolEngine()
    const ev = new EvEngine()
    petrol.keyStart()
    const evAdapter = new EvAdapter(ev)
    evAdapter.keyStart()

}

main()