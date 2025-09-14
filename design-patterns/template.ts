abstract class CarFactory{
    manufacture(): void {
        this.addEngine()
        this.addMusic()
        this.addCustom()
    }
    private addEngine(): void{
        console.log('engine added')
    }
    private addMusic(): void{
        console.log('music added')
    }
    addCustom(): void{}
}

class SportsCar extends CarFactory{
    addCustom(): void{
        console.log('custom')
    }
}

class EVCar extends CarFactory{
    addCustom(): void{
        console.log('customev')
    }
}  

function main(): void{
    const sports = new SportsCar()
    sports.manufacture()

    const  ev = new EVCar()
    ev.manufacture()
}
main()
