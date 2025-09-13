class Car{
    onStart(): void {}
}

class BasicCar extends Car{
    onStart(): void{
        console.log('basic car')
    }
}

class DecoratorCar extends Car{
    private car: Car    

    constructor(car: Car){
        super()
        this.car = car        
    }
    onStart(): void{
        this.car.onStart()
    }
}

class Music extends DecoratorCar{ 
    onStart(): void{
        super.onStart()
        console.log('music play')
    }
}

class Sunroof extends DecoratorCar{
    onStart(): void{
        super.onStart()
        console.log('open') 
    }
}

function main(): void{
    const basiccar = new BasicCar()
    const musiccar = new Music(basiccar)
    const sunroofmusiccar = new Sunroof(musiccar)

    sunroofmusiccar.onStart()
}
main()