class Room{ 
    private name: string;
    constructor(name: string){
        this.name = name
    }   
    getRoomName(): string{
        return this.name
    }
}

class House{
    private name: string;
    private roomList: Room[];

    constructor(name: string){
        this.name = name;
        this.roomList = []
    }
    addRooms(): void{
        this.roomList.push(new Room('bedroom'))
        this.roomList.push(new Room('hall'))
    }
    getRooms(): void{
        this.roomList.forEach((item) => console.log(item.getRoomName()))
    }
}

function main(): void{
    const house1 = new House('house 1')
    house1.addRooms()
    house1.getRooms()
}
main()