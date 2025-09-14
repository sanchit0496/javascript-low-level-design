// without 
class Car{
    private car: string 
    constructor(car: string) {
         this.car = car
    }
    start(): void {
        console.log('start')
    }
    horn(): void{
        console.log('horn')
    }
}

function main(): void{
    const car1 = new Car('bmw');
    car1.horn()
    car1.start()
}
main() 


// with 
interface Command{
    execute(): void
}

class Car{
    private brand: string
    constructor(brand: string){
        this.brand = brand
    }
    start(): void{
        console.log('car start')
    }
    horn(): void{
        console.log('horn here')
    }
}

class StartCar implements Command{
    private car: Car

    constructor(car: Car){
        this.car = car 
    }    
    execute(): void{
        this.car.start()
    }
}

class HornCar implements Command{
    private car: Car

    constructor(car: Car){
        this.car = car 
    }    
    execute(): void{
        this.car.horn()
    }
}

class Remote{
    private command?: Command;

    setCommand(command: Command): void{
        this.command = command
    }
    pressButton(): void{
        if(this.command){
            this.command.execute()
        }else{
            console.log('command')
        }
    }
}

function main(): void{

    const remote = new Remote()

    const car = new Car('bmw')
    const startcar = new StartCar(car)
    remote.setCommand(startcar)
    remote.pressButton()

    const car1 = new Car('mustang')
    const horncar = new HornCar(car1)
    remote.setCommand(horncar)
    remote.pressButton()


}

main()
