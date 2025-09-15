class Car{
    private id: number
    private model: string
    private engine: string
    constructor(id: number, model: string, engine: string){
        this.id = id
        this.model = model
        this.engine = engine
    }
} 

interface DB{
    add(car: Car): void
    getAll(): Car[]
} 
class DBLogic implements DB{
    private carList: Car[] = []
 
    add(car: Car): void{
        this.carList.push(car)     
    }
    getAll(): Car[]{
        return this.carList
    }
}

class CarDealership{
    private dbLogic: DBLogic
    constructor(dbLogic: DBLogic){
        this.dbLogic = dbLogic
    }
    addCar(id: number, model: string, engine: string): void{
        const car = new Car(id, model, engine)
        this.dbLogic.add(car)  
    }
    getCars(): void{
        console.log(this.dbLogic.getAll())
    }
}

function main(): void {
    const db = new DBLogic()
    const carDealership = new CarDealership(db)
    carDealership.addCar(1, 'bmw', 'petrol')
    carDealership.getCars()
}

main()
