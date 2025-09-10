// without 
// without 
class Car{
    start(): void {}
}

class EV extends Car{ 
    start(): void{
        console.log('car start')
    }
}

class brokenEV extends EV{
    start(): void{
        throw Error('broken car')
    }
}

function main(): void{
    const ev = new EV()
    ev.start()
    const brokenev = new brokenEV()
    brokenev.start()
}

main() 


// with 
class Car{
    start(): void {}
}

class EV extends Car{ 
    start(): void{
        console.log('car start')
    }
}

class brokenEV extends EV{
    start(): boolean{
        console.log('broken car') 
        return false;
    }
}

function main(): void{
    const ev = new EV()
    ev.start()
    const brokenev = new brokenEV()
    if(brokenev){
        console.log('car broken')
    }else{
        console.log('car start')
    }
}

main() 