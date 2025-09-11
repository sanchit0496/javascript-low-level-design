// without
class Vehicle{
    starts(): void{}
}

class Bike extends Vehicle{
    starts(): void{
        console.log('bike start')
    }
}

class Car extends Vehicle{
    starts(): void{
        console.log('car start')
    }
}


function main():void{
    const createVehicle = (type: string): Vehicle => {
        if(type === 'bike'){
            return new Bike()
        }
        return new Car()
    }
    let v1 = createVehicle('bike')
    v1.starts()
    let v2 = createVehicle('car')
    v2.starts()

}
main()

//with 
class Vehicle{
    starts(): void{}
}

class Bike extends Vehicle{
    starts(): void{
        console.log('bike start')
    }
}

class Car extends Vehicle{
    starts(): void{
        console.log('car start')
    }
}

class VehicleFactory{
    private type: string;

    constructor(type: string){
        this.type = type
    } 
    createVehicle():Vehicle{
        if(this.type === 'bike'){
            return new Bike()
        }
        return new Car()    
    }
}


function main():void{
    const bike = new VehicleFactory('bike')
    bike.createVehicle().starts()

    const car = new VehicleFactory('car')
    car.createVehicle().starts()

}

main()