class CarType{
    private engine: string;
    private brand : string;
    constructor(engine: string, brand: string){
        this.engine = engine
        this.brand = brand
    }
    getDetails(): string{
        return (`${this.engine}_${this.brand}`)  
    }
}

class Car{
    private color: string;
    private sunroof : boolean;
    private cartype : CarType
    constructor(color: string, sunroof: boolean, cartype: CarType){
        this.color = color
        this.sunroof = sunroof
        this.cartype = cartype
    }
    getDetails(): void{
        console.log(`${this.color}_${this.sunroof}_${this.cartype.getDetails()}`)
    }
}

class CarMap{ 
    private cartype: Map<string, CarType> = new Map()
    
    getCarType(brand: string, engine: string): CarType{
        const key = `${brand}_${engine}`

        if(!this.cartype.has(key)){
            this.cartype.set(key, new CarType(engine, brand))
        }
        return this.cartype.get(key)!
    }
}

function main(): void{
    const carmap = new CarMap() 
    const cartype1 = carmap.getCarType('petrol', 'bmw') 
    const car = new Car('orange', true, cartype1)
    car.getDetails()
}
main() 
