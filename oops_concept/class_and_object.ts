class Vehicle{
    private brand: string;
    private speed: number;

    constructor(brand:string, speed:number){
        this.brand = brand;
        this.speed = speed;
    }

    displayInfo(): void{
        console.log(this.brand, this.speed)
    }

    accelerate(inputSpeed: number): void{
        this.speed += inputSpeed
    }

    deaccelerate(inputSpeed: number): void{
        this.speed -= inputSpeed
    }

}

function main(): void{
    const mustang = new Vehicle('mustang', 20)
    mustang.displayInfo()

    mustang.accelerate(60)
    mustang.displayInfo()

    mustang.deaccelerate(20)
    mustang.displayInfo()
}

main()