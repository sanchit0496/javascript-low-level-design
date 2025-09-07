// without
class Calculator{
    static calculate(operator: string, num1: number, num2:number): number{
        if(operator === 'add'){ 
            return num1 + num2
        }
        if(operator === 'multiply'){
            return num1 * num2 
        }
        throw new Error('unknown operator') 
    }

}

function main(): void{

    let value1 = Calculator.calculate('add', 2,4)
    let value2 =  Calculator.calculate('multiply', 2,10)
    console.log(value1,value2) 
}

main(); 

//with 
class Calculator{
    static add(num1: number, num2: number): number{
        return num1 + num2;
    } 
    static multiply(num1: number, num2: number){
        return num1 * num2;
    }
}


function main(): void{

    let value1 = Calculator.add(2,4)
    let value2 = Calculator.multiply(2,4)
    console.log(value1, value2) 
}
 
main();           