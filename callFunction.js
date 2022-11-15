var obj = {num:2};
var addToThis = function(a){
  return this.num + a;
};
var x=addToThis.call(obj, 3);
console.log(x);