interface CarState{
    updateStatus(): void 
}

class StartState implements CarState{
    updateStatus(): void{
        console.log('start state')
    }
}

class AccelerateState implements CarState{
    updateStatus(): void{
        console.log('accelerate state')
    }
}


class State{
    private state: CarState
    constructor(){
        this.state = new StartState()
    }
    setStatus(state: CarState): void{
        this.state = state
    }
    getStatus(): void{
        this.state.updateStatus(); 
    }
}

function main(): void{
    const state =  new State() 
    
    const carstate = new StartState()
    state.setStatus(carstate)
    state.getStatus()

    const acclstatus = new AccelerateState()
    state.setStatus(acclstatus)
    state.getStatus()
}
main()
