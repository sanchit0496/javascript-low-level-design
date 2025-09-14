// without 
class Car{
    showDetail(): void{}
}
class Engine extends Car{
    showDetail(): void{
        console.log('engine')
    }
}
class Type extends Car{
    showDetail(): void{
        console.log('tyre')  
    }
}

function main(): void{
    const engine = new Engine()
    const tyre1 = new Type()
    const tyre2 = new Type()
    const tyre3 = new Type()
    const tyre4 = new Type()

    engine.showDetail()
    tyre1.showDetail()
    tyre2.showDetail()
    tyre3.showDetail()
    tyre4.showDetail()
}

main()

// with 
class Car{
    showDetail(): void{}
}
class Engine extends Car{
    showDetail(): void{
        console.log('engine')
    }
}
class Tyre extends Car{
    showDetail(): void{
        console.log('tyre')  
    }
}
class CompositeCar extends Car{
    private carparts: Car[] = []
    
    addPart(part: Car): void{
        this.carparts.push(part)
    }

    showDetail(): void{
        for(let part of this.carparts){
            part.showDetail()
        }
    }
}

function main(): void{
    const engine = new Engine()
    const tyre1 = new Tyre()
    const tyre2 = new Tyre()
    const tyre3 = new Tyre()
    const tyre4 = new Tyre()
    const compositeCar = new CompositeCar()

    compositeCar.addPart(engine)
    compositeCar.addPart(tyre1)
    compositeCar.addPart(tyre2)
    compositeCar.addPart(tyre3)
    compositeCar.addPart(tyre4) 

    compositeCar.showDetail()  
}  

main()
