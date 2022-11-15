const Student = {
  age: 20,
}
function print() {
return this.age;
}
var x=print.bind(Student);
console.log(x());
