// without 
interface Vehicle{
    openSunroof(): void 
    engineStart(): void
}

class Bike implements Vehicle{
    openSunroof(): void {
        console.log('unavailable')
    }
    engineStart(): void{
        console.log('engine start')
    }
}

class Car implements Vehicle{
    openSunroof(): void{
        console.log('open sunroof')     
    }
    engineStart(): void{
        console.log('engine start')
    }
}

function main(): void{
    const car = new Car()
    const bike = new Bike()
    car.openSunroof()
    car.engineStart()
    bike.openSunroof()
    bike.engineStart()
}

main()

// with 
interface SunRoof{
    opensunroof(): void
}

interface StartEngine{
    startengine(): void
}

class Car implements SunRoof, StartEngine{
    opensunroof(): void{
        console.log('open sunroof')
    }
    startengine(): void{
        console.log('start engine')
    }
}

class Bike implements StartEngine{
      startengine(): void{
        console.log('start engine')
    }
}

function main(): void{
    const car = new Car()
    car.opensunroof()
    car.startengine()

    const bike = new Bike()
    bike.startengine()
}


main()  