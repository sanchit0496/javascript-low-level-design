// without 
class CarDrive{
    private carroute;
    constructor(carroute: string){
        this.carroute = carroute
    }

    outdoordrive() : void {
        console.log(this.carroute)
    }
}

function main(): void{
    let route = 'water'
    if(route === 'road'){
        const cardrive = new CarDrive('road')
        cardrive.outdoordrive()
    }else if(route === 'water'){
        const cardrive = new CarDrive('water')
        cardrive.outdoordrive()
    }
}
main()

// with 
//code
interface Drive{
    drive(): void
}

class RoadDrive implements Drive{
    drive(): void{
        console.log('road drive')
    }
}
class WaterDrive implements Drive{
    drive(): void{
        console.log('water drive')  
    }
}

class Car{
    private driveroute;
    constructor(driveroute: Drive){
        this.driveroute = driveroute
    }
    drive(): void{
        this.driveroute.drive()
    }
}

function main(): void{
    const car_drive = new Car(new RoadDrive())
    car_drive.drive()

    const water_drive = new Car(new WaterDrive())
    water_drive.drive()
}

main() 