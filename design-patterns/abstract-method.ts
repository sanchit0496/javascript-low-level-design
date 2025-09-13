//without 
class PetrolCar{
    onStart(): void{
        console.log('petrol car')
    }
}

class PetrolBike{
    onStart(): void{
        console.log('petrol bike')
    }
}

class evCar{
    onStart(): void{
        console.log('ev car')
    }
}

class evBike{
    onStart(): void{
        console.log('ev bike')
    }
}

function main(): void{
    const petrolcar = new PetrolCar()
    const petrolbike = new PetrolBike()

    const evcar = new evCar()
    const evbike = new evBike()

    petrolcar.onStart()
    petrolbike.onStart()
    evcar.onStart()
    evbike.onStart()

}

main()

//with 

interface Car{
    onStart(): void
}

interface Bike{
    onStart(): void
}

class PetrolCar implements Car{
    onStart(): void{
        console.log('petrol car')
    }
}

class PetrolBike implements Car{
    onStart(): void{
        console.log('petrol bike')
    }
}

class EVCar implements Car{
    onStart(): void{
        console.log('ev car')
    }
}

class EVBike implements Car{
    onStart(): void{
        console.log('ev bike')
    }
}

interface Factory{
    createCar(): Car
    createBike(): Bike
} 

class PetrolFactory implements Factory{
    createCar(): PetrolCar{
        return new PetrolCar()
    }
    createBike(): PetrolBike{
        return new PetrolBike()
    }
}

class EVFactory implements Factory{
    createCar(): PetrolCar{
        return new EVCar()
    }
    createBike(): PetrolBike{
        return new EVBike()
    } 

}

function main(Factory: Factory){
    const car = Factory.createCar()
    const bike = Factory.createBike()
    car.onStart()
    bike.onStart()
}

main(new PetrolFactory())
main(new EVFactory())