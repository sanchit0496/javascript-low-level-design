class Model{
    private engine : string;
    private car : string;
    constructor(engine: string, car: string){
        this.engine = engine
        this.car = car
    }
    getDetails(): string{
        return `${this.engine} and ${this.car}`
    }
}
class View{
    displayDetail(detail: string): void{
        console.log(detail)
    }
}

class Controller{
    private model: Model
    private view: View
    constructor(model: Model, view: View){
        this.model = model
        this.view = view
    }
    userClick(): void{
        const detail = this.model.getDetails()
        this.view.displayDetail(detail)
    }
}

function main(): void{
    const carModel = new Model('petrol','bmw')
    const carView = new View()
    let carController = new Controller(carModel, carView)
    carController.userClick()
}
main() 
