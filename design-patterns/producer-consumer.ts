class Buffer{
    private queue: number[] = []
    private queuelength : number 

    constructor(queuelength: number){
        this.queuelength = queuelength 
    } 

    produce(item: number): void{
        if(this.queue.length >= this.queuelength){
            console.log('length')
            return
        }else{
            console.log('pushed')
            this.queue.push(item)
        }
    }

    consume(): void{
        if(this.queue.length === 0){
            console.log('add') 
            return
        }
        const item = this.queue.shift()
        console.log('consumer', item)
    }

    getLength(): void{
        console.log('length here', this.queue.length)
    }

}
function main(){
    const buffer  = new Buffer(4)
    buffer.produce(1)
    buffer.produce(2)
    buffer.produce(3)
    buffer.produce(4)
    buffer.getLength()

    buffer.consume()
    buffer.consume()
    buffer.getLength()

}
main()  
