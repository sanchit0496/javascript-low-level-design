// enum orderStatus {
//     placed = 'placed',
//     confirmed = 'confirmed'
// }

// const ostatus: orderStatus = orderStatus.placed
// if(ostatus === 'placed'){
//     console.log('order placed')
// }

class CricketScore{
    static readonly century = new CricketScore("Century", 100)
    static readonly halfcentury = new CricketScore('HalfCentury', 50)

    private readonly name: string;
    private readonly score: number;

    private constructor(name: string, score: number){
        this.name = name;
        this.score = score;
    }


    getValue(): number{
        return this.score;
    }
    getName(): string{
        return this.name;
    }

}

console.log(CricketScore.century.getValue())
console.log(CricketScore.halfcentury.getName())