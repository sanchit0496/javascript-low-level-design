// without
class Car{
    startEngine(): void{
        console.log('engine started')
    }
    fuelMeter(): void{
        console.log('fuel meter')
    }
    accelerate(): void{
        console.log('accelerate')
    }
    opensunroof(): void{
        console.log('opensunroof')
    }
}

function main(): void{
    const car = new Car()
    car.startEngine()
    car.fuelMeter()
    car.accelerate()
    car.opensunroof()
}

main()



// with
// with
class Car{
    fuelMeter: FuelMeter
    sunroof: SunRoof

   constructor(fuelMeter: FuelMeter, sunroof: SunRoof){
       this.fuelMeter = fuelMeter
       this.sunroof = sunroof
   }

   startEngine(): void{
       console.log('engine started')
   }
   accelerate(): void{
       console.log('accelerate')
   }
}
class FuelMeter{
   fuelMeter(): void{
       console.log('fuel meter')
   }
}
class SunRoof{
   opensunroof(): void{
       console.log('opensunroof')
   }
}

function main(): void{
       const fuelMeter = new FuelMeter()
   const sunroof = new SunRoof

   const car = new Car(fuelMeter, sunroof)

   car.startEngine()
   car.accelerate()
   car.fuelMeter.fuelMeter()
   car.sunroof.opensunroof()
}

main()