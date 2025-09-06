// undirection
class College{
    college: string;
    constructor(college: string){
        this.college = college
    }
}

class Student{
    name: string;
    college: College

    constructor(name: string, college: College){
        this.name = name;
        this.college = college;
    }
    getData(): void{
        console.log(`${this.name} at ${this.college.college}`)
    }
}

const college1 = new College('test')
const student1 = new Student('hello', college1)
student1.getData()