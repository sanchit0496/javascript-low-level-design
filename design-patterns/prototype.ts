// without 
class Car{
    private wheels;
    private engine;

    constructor(wheels: string, engine: string){
        this.wheels = wheels
        this.engine = engine 
    }
    carbook(): void{
        console.log(this)
    }
}

function main(): void{
    const car = new Car('4', 'petrol')
    car.carbook()
}

main()

// with 
class Car{
    private wheels;
    private engine;

    constructor(wheels: string, engine: string){
        this.wheels = wheels
        this.engine = engine 
    }
    setEngine(engine: string){
        this.engine = engine 
    }  
    carbook(): void{
        console.log(this)
    }
    clone(): Car{
        return new Car(this.wheels, this.engine)
    }
}

function main(): void{
    const car = new Car('4', 'petrol')
    car.carbook()
    const car1 = car.clone()
    car1.setEngine('ev') 
    
    car1.carbook()
}

main()