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


// bidirectional

class Student{
    private name:string;
    private college?: College;

    constructor(name: string){
        this.name = name;
    }
    getInformation(): string{
        return `${this.name} (${this.college?.getCollegeName() ?? "No College"})`;
    }

    setCollege(college: College): void{
        this.college = college
    }
}

class College{
    private collegeName: string

    private studentList: Student[] = []

    constructor(collegeName: string){
        this.collegeName = collegeName
    } 

    getCollegeName(): string {  
        return this.collegeName
    }
    setStudents(studentInfo: Student): void{
        this.studentList.push(studentInfo)
        studentInfo.setCollege(this);
    }
    getStudentList(): Student[]{
        return this.studentList;
    }

}

function main(): void{
    const college = new College('College Name')

    const student1 = new Student('Student1')
    const student2 = new Student('Student2')

    college.setStudents(student1)
    college.setStudents(student2)

console.log(college.getStudentList().map(s => s.getInformation()))

}
main() 