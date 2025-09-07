class userValidatior{
    static isValid(name: string){
        if(name.length === 0){
            return false;
        }
        return true;
    }
}

class saveData{
    save(name: string){
        console.log(`okay ${name}`)
    }
}

class userHelper{
    private saveData = new saveData()

    constructor(name: string){
        if(!userValidatior.isValid(name)){
            console.log('not valid')
        }
        this.saveData.save(name)
    }

}

function main(): void{
    const userObj = new userHelper('Hello')
    const userObj1 = new userHelper('')

}
main()