interface Car{
    start(): void 
}
class RealCar implements Car{
    start(): void {
        console.log('car start')
    }
}

class ProxyCar implements Car{
    private admin: string
    private realCar = new RealCar()
    constructor(admin: string){
        this.admin = admin
    }
    start(): void{
        if(this.admin !== 'admin'){
            console.log('admin required')
            return;
        }else{
            this.realCar.start()
        }
    }
}

function main(): void{
    const proxy = new ProxyCar('admin')
    proxy.start()

    const proxy1 = new ProxyCar('other')
    proxy1.start()
}
main()
