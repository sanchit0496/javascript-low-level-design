// with 
class Car{
    private wheels;
    private engine;
    private sunrooof;
    private musicsystem;

    constructor(wheels: string, engine: string,sunroof: boolean, musicsystem: boolean){
        this.engine = engine
        this.wheels = wheels
        this.sunrooof = sunroof
        this.musicsystem = musicsystem
    } 

    build(): Car{
        return this;
    }

    showDetails(): void{
        console.log(this) 
    }

}

function main(): void{
    const car1 = new Car('4', 'petrol', true, false)
    console.log(car1)

    const car2 = new Car('4', 'ev', false, true)
    console.log(car2)

}
main() 

//with 
class Car{ 
    private wheels;
    private sunscreen;
    private engine;
    private musicsystem;

    setSunscreen(sunscreen: boolean): Car{
        this.sunscreen = sunscreen
        return this;
    }
    setWheels(wheels: string): Car{
        this.wheels = wheels
        return this;
    }
    setEngine(engine: string): Car{
        this.engine = engine
        return this;
    }
    setMusicSystem(musicsystem: boolean): Car{
        this.musicsystem = musicsystem
        return this;
    } 

    build(): Car{
        return this;
    }

    showDetails(): void{ 
        console.log(this)
    }
}

function main(): void{
    const evCar = new Car().setEngine('ev').setWheels('4')
    evCar.showDetails()

    const petrolCar = new Car().setEngine('car').setWheels('4').setMusicSystem(false).setSunscreen(false)
    petrolCar.showDetails()
}
main()