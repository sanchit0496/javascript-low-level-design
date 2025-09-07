// without
class Engine{
    startEngine(): void{
        console.log('engine started without one')
    }
}

class Car{
    private engine: Engine

    constructor(engine: Engine){
        this.engine = engine
    }
    
}

function main(): void{
    const engine1 = new Engine()
    const car1 = new Car(engine1)
    car1.engine.startEngine()

}
main()

// with 
class Engine{
    start(): void{
        console.log('engine started')
    }
}

class Car{
    private engine: Engine
    constructor(engine: Engine){
        this.engine = engine
    }
    startCar(): void{
        this.engine.start()
    }
}
function main(): void{
    const engine = new Engine()
    const car = new Car(engine)
    car.startCar()
}


main()
// okay to without mein pehle engine then car mein engine daala dn then through car call kar rhe
// par with wale mein we create a function inside car to start engine and we call that function only lol 
