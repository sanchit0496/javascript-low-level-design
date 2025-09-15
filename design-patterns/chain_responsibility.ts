abstract class ServiceHandler{
    private nextHandler : ServiceHandler | null = null; 

    setNext(handler:ServiceHandler): ServiceHandler{
        this.nextHandler = handler
        return handler
    }
    handle(request: string): void{
        if(this.nextHandler){
            this.nextHandler.handle(request)
        }else{
            console.log('handler aint')
        }
    }
}


class OilService extends ServiceHandler{
    handle(request: string) : void {
        if(request === 'oil'){
            console.log('oil change')
        }else{
            super.handle(request)
        }
    }
}

class CarService extends ServiceHandler{
    handle(request: string) : void {
        if(request === 'car'){
            console.log('car change')
        }else{
            super.handle(request)
        }
    }
}

class WashService extends ServiceHandler{
    handle(request: string) : void {
        if(request === 'wash'){
            console.log('wash change')
        }else{
            super.handle(request)
        }
    }
}

function main(): void{
    const wash = new WashService()
    const oil = new OilService()
    const car = new CarService()

    wash.setNext(oil).setNext(car)

    wash.handle('oil')
    wash.handle('wash')
    wash.handle('car')
    console.log('call')
}
main() 
