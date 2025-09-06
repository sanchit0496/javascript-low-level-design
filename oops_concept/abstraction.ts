abstract class Vehicle{
    private brand: string
  
    constructor(brand: string){
        this.brand = brand
    }  
    getBrand(): string{
        return this.brand;
    }

    abstract start(): void
}

class Car extends Vehicle{

    start(): void {
        console.log(`started ${this.getBrand()}`)  
    }
}

const bmwCar: Vehicle = new Car('BMW')
bmwCar.start()