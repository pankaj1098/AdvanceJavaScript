let multiply = function(x,y){
    console.log(x*y);
}
 let mutiply=function(x){
return function(y){
    console.log(x*y);
}
 }

let multiplyByTwo=multiply.bind(this,2,3);//by using curring
multiplyByTwo(5);
let multiplyByThree=multiply.bind(this,3);
multiplyByThree(5);
let multiplyByFour=multiply.bind(this,);
multiplyByFour(2,4);
let mutiplyByTwo=mutiply(2);//By using clousers
mutiplyByTwo(5);
