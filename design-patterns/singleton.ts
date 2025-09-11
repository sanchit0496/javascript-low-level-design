class DatabaseConnection{
    private static instance : DatabaseConnection
    private constructor(){}

    static createConnection(): DatabaseConnection{
        if(!DatabaseConnection.instance){
            DatabaseConnection.instance = new DatabaseConnection()
        }
        return DatabaseConnection.instance
    }

}

function main(): void{
    const db1 = DatabaseConnection.createConnection()
    const db2 = DatabaseConnection.createConnection()
    console.log(db1 === db2)
}

main()