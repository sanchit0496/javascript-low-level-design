class ThreadPool{ 
    private taskQueue: (() => Promise<void>)[]
    private totalworkers: number  
    private activeWorker: number

    constructor(totalworkers: number){
        this.totalworkers = totalworkers 
        this.activeWorker = 0
        this.taskQueue = []
    }

    private runNext(): void {
        if(this.activeWorker < this.totalworkers && this.taskQueue.length > 0){
            const task = this.taskQueue.shift()!
            this.activeWorker++

            task().then(() => {
                this.activeWorker--
                this.runNext()
            })
        }
    
    }
 
    execute(task: any): void{
        this.taskQueue.push(task)
        this.runNext()
    }
    
}

function main(): void{ 
    const pool = new ThreadPool(2)

    const createTask = (id: number, time: number) => {
        return async() => {
            console.log('task')
            await new Promise(res => setTimeout(res,time ))
            console.log('yeah')
        }
    }
    pool.execute(createTask(1,3000))
    pool.execute(createTask(2, 1000))
}
 main() 
