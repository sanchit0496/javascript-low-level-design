// cohesion = one class does one thing only 


// low cohesion = one class does everything 

class Car{
    engineStart(): void{
        console.log('engine start')
    }
    musicPlay(): void{
        console.log('music play')
    }
    gateOpen(): void{
        console.log('gate open')
    }
    sunroofOpen(): void{
        console.log('sunroof open')
    }
}

function main(): void{
    const car = new Car()
    car.engineStart()
    car.musicPlay()
    car.gateOpen()
    car.sunroofOpen() 

}
main()

// cohesion = one class does one thing only 


// high cohesion = different class for each feature of the car 

class EngineStart{
    engineStart(): void{
        console.log('engine start')
    }
}
class MusicPlay{
    musicPlay(): void{
        console.log('music play')
    }
}

class Car{
    private engineStart: EngineStart
    private musicPlay: MusicPlay

    constructor(engineStart: EngineStart, musicPlay: MusicPlay){
        this.engineStart = engineStart
        this.musicPlay = musicPlay
    }

    gateOpen(): void{
        console.log('gate open')
    }
    sunroofOpen(): void{
        console.log('sunroof open')
    }
    startEngine(): void{
        this.engineStart.engineStart()
    }
    playMusic(): void{
        this.musicPlay.musicPlay()
    }

}

function main(): void{
    const musicPlay = new MusicPlay()
    const engineStart = new EngineStart()
    const car = new Car(engineStart, musicPlay)

    car.gateOpen()
    car.sunroofOpen() 
    car.playMusic()
    car.startEngine()

}
main()