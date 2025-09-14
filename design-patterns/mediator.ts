// without 
class Engine{
    addEngine(): void{
        console.log('engine added')
    }
}
class Music{
    addMusic(): void{
        console.log('music added')
    }
}

function main(): void{
    const engine = new Engine()
    const music = new Music()
    engine.addEngine()
    music.addMusic()
}

main()

// without 

class Engine{
    addEngine(): void{
        console.log('engine added')
    }
}
class Music{
    addMusic(): void{
        console.log('music added')
    }
}

class Mediator{
    private engine : Engine;
    private music: Music;

    constructor(engine: Engine, music: Music){
        this.engine = engine
        this.music = music
    }
    assemble(): void{
        this.engine.addEngine()
        this.music.addMusic()
    }
}

function main(): void{
    const engine = new Engine()
    const music = new Music()
    const mediator = new Mediator(engine, music) 
    mediator.assemble()
}   
main()
