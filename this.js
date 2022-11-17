class student{
    static count=0;
    constructor(name,age,phoneNumber,boardMarks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.boardMarks=boardMarks;
        student.countStudent();
    }
    static countStudent(){
        return(student.count++);
    }
egligible(){
    if(this.boardMarks>40){
        console.log(`${this.name} age ${this.age} is eligible`);
    }
    else{
        console.log(`${this.name} age ${this.age} is not eligible`);
    }
}
}
const student1=new student("pankaj",26,9756630511,30);
const student2=new student("Apoorv",27,9650522682,55);
const student3=new student("Amit",28,8800530798,40);
const student4=new student("Goldy",30,7982419638,55);
const student5=new student("Swapnil",29,7300872887,95);
student1.egligible();
student2.egligible();
student3.egligible();
student4.egligible();
student5.egligible();
console.log(student.countStudent());

