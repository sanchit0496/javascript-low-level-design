class Car{
    accelerate(): void{
        console.log('accelerate')
    } 
    deaccelerate(): void{
        console.log('deaccelerate')
    } 
}

class petrol extends Car{
    fillTank(): void{
        console.log('petrol filled')
    }
}

class EV extends Car{
    batteryCharge(): void{
        console.log('battery charged')
    }
}

const petrolCar = new petrol()
petrolCar.accelerate()
const evCar = new EV()
evCar.batteryCharge()