interface Vehicle{
    allowVisit(visitor: Visitor): void
}

interface Visitor{
    bikevisitor(): void
    carvisitor(): void
}

class Washer implements Visitor{
    bikevisitor(): void{
        console.log('bike washer')
    }
    carvisitor(): void{
        console.log('car washer')
    }
}

class Repair implements Visitor{
    bikevisitor(): void{
        console.log('bike repair')
    }
    carvisitor(): void{
        console.log('car repair')
    }
}

class BikeVisitor implements Vehicle{
    allowVisit(visitor : Visitor): void{
        visitor.bikevisitor()
    }
}   

class CarVisitor implements Vehicle{
    allowVisit(visitor : Visitor): void{
        visitor.carvisitor()
    }
}   

function main(): void{
    const carvisitor = new CarVisitor()
    const repair = new Repair()
    carvisitor.allowVisit(repair)
    
    const bikevisitor = new BikeVisitor() 
    const washer = new Washer()
  
    bikevisitor.allowVisit(washer)
}
main()
