var a=4;
let square=_=>{return a*a};
console.log(square());

let mult=(b,c)=>{return b*c};
console.log(mult(2,4));

var x= function(){
    var that=this;
    this.val=1;
    // setTimeout(function(){
        setTimeout(()=>{

        that.val++;
        console.log(that.val)
    },1)
};
var xx = new x();

var y=function(){
    console.log(arguments[0])
};
y(1,2,3);

var z=(...n)=>{
    console.log(n[0])
};
z(1,2,3);

class Student {
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
     setPlacementAge(minPlacementAge){
       
        return (minMarks)=>{
            if(this.marks>minMarks && this.age>minPlacementAge){
                console.log(this.name+ "is ready for placement");
            }
            else{
                console.log(this.name+"is not ready for placement");
            }
        }

     }
}

const student1=new Student('rahul',23,78);
const student2=new Student('pankaj',12,45);
student1.setPlacementAge(18)(40);