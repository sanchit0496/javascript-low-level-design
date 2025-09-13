// without 
class Engine{
    start(): void{
        console.log('engine start')  
    }
}

class Sunroof{
    open(): void{
        console.log('sunroof open')
    }
}


class Music{
    play(): void{
        console.log('play music')
    }
}

class Accelerate{
    accl(): void{
        console.log('accelerate')
    }
}


function main(): void{
    const engine = new Engine()
    const sunroof = new Sunroof()
    const music = new Music()
    const accln = new Accelerate()
    engine.start()
    sunroof.open()
    music.play()
    accln.accl() 
}
main()

// with 
class Engine{
    start(): void{
        console.log('engine start')  
    }
}

class Sunroof{
    open(): void{
        console.log('sunroof open')
    }
}


class Music{
    play(): void{
        console.log('play music')
    }
}

class Accelerate{
    accl(): void{
        console.log('accelerate')
    }
}

class CarFacade{
    private engine; 
    private sunroof;
    private music;
    private accln;
    constructor(){
        this.engine = new Engine()
        this.sunroof = new Sunroof
        this.music = new Music()
        this.accln = new Accelerate()
    }
    startCar(): void{
        this.engine.start()
        this.sunroof.open()
        this.music.play()
        this.accln.accl() 
    }
}

function main(): void{
    const carfacade = new CarFacade()
    carfacade.startCar()
}
main()