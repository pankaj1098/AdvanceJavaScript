// function x(){
//   for (let i=1; i<=5;i++){
//     setTimeout(function(){
//     console.log(i);
//   },i*1000);
// }
//   console.log("NamasteJavaScript");
// }
// x();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     function close() {      //or close(x)
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000); //or x*1000;
//     }
//     close(i);
//   }
//   console.log("NamasteJavaScript");
// }
// x();

// function y() {
//   setTimeout(() => console.log(a), 1000);
//   console.log("Done Coding");
// }
// y();

// function y() {
//   setTimeout(() => console.log(a), 0);
//   console.log("Done Coding");
// }
// y();

// function y() {
//   for (var i = 1; i < 6; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
//   console.log("Done Coding");
// }
// y();

// function y() {
//   for (let i = 1; i < 6; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
//   console.log("Done Coding");
// }
// y();

// var count =0;
// const name = (arr)=>{
//   return()=>{
//     console.log('Hello'+arr[count]);
//     count++;
//   }
// }

// let fun = name(["Ram","Shyam"]);
// console.log(fun);
// fun()// Print Hello Ram

// fun()//print Hello Shyam

// a();
// b();
// function a() {
//   console.log("inside a");
// }
// var b = function () {
//   console.log("inside b");
// };
// function add(x, y) {
//   return x + y;
// }
// let sum = add;
// let result = sum(10, 20);
// console.log(result);

// function multiply(a, b, c) {
//   return a * b * c;
// }

// function multiply_curried(a) {
//   return function (b) {
//     return function (c) {
//       return a * b * c;
//     };
//   };
// }

// let res = multiply(1, 2, 3);
// console.log(res);

// let mc1 = multiply_curried(1);
// let mc2 = mc1(2);
// let res2 = mc2(3);
// console.log(res2);

// let res3 = multiply_curried(1)(2)(3);
// console.log(res3);

this.table='window table';
const cleanTable =function(soap){
  // let that =this;
  // const innerfunction=function(_soap){
    const innerfunction=(_soap)=>{

        // console.log(`cleaning ${that.table} using ${_soap}`);
        console.log(`cleaning ${this.table} using ${_soap}`);

      }
  // innerfunction.call(this,soap);
  innerfunction.bind(this)(soap);

  };
this.garage={
  table:'garage table'
};
// let johnsRoom={
//   table:'johns table'
// };
// let createRoom=function(name){
//   this.table=`${name}s table`
// }
class createRoom{
  constructor(name){
      this.table=`${name}s table`
  }
  cleanTable=function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
  }
  
}
// createRoom.prototype.cleanTable=function(soap){
//   console.log(`cleaning ${this.table} using ${soap}`);
// };

const jillsRoom=new createRoom("jills");
const johnsRoom= new createRoom('johns');
// cleanTable.call(this,'some soap');
// cleanTable.call(this.garage,'some soap');
// cleanTable.call(johnsRoom,'some soap');
// cleanTable.call(jillsRoom,'some soap');
jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap');


 