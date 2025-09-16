class Vehicle{
    private brand : string;
    private accln : string;
    constructor(brand: string, accln: string){
        this.brand = brand
        this.accln = accln
    }
    getBrand(): string{
        return this.brand
    }
    getAccln(): string{
        return this.accln
    }
}

class Engine{
    private brand: string = 'bmw'
    private accln: string = '0'

    setState(brand: string, accln: string){
        this.brand = brand
        this.accln = accln
        console.log(`Engine set -> brand: ${this.brand}, accln: ${this.accln}`); 
    }
    storeState(){
        return new Vehicle(this.brand, this.accln) 
    }
    getState(vehicle: Vehicle){
        this.accln = vehicle.getAccln()
        this.brand = vehicle.getBrand() 
        console.log(`Restored -> brand: ${this.brand}, accln: ${this.accln}`);
    }
}

class EngineHistory{ 
    private enginehistory: Vehicle [] = []
    
    push(vehicle: Vehicle){
        this.enginehistory.push(vehicle)
    }

    pop(): Vehicle | undefined{
        return this.enginehistory.pop()
    }
}

function main(): void{

  const engine = new Engine();
    const enginehistory = new EngineHistory();

    engine.setState('bmw', '1');
    enginehistory.push(engine.storeState()); // save snapshot

    engine.setState('mustang', '2');
    enginehistory.push(engine.storeState()); // save snapshot

    engine.setState('audi', '3');
    console.log('--- now undo ---');

    // Undo
    const prev1 = enginehistory.pop();
    if (prev1) engine.getState(prev1);

    const prev2 = enginehistory.pop();
    if (prev2) engine.getState(prev2);

}
main()
