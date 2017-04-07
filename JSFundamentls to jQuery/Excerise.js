//1.DOT operator

var DOT = function(object, attr){
  if(object.hasOwnProperty(attr)){
    return object[attr];
  }
  else if(object.__proto__)
    {
        DOT(object.__proto__, attr);
    }
}
//2.DOTCALL operator
var DOTCAL = function(obj, method, args){
  var fn = DOT(obj, method)
  if(fn){
    return fn.apply(obj,args);
     }
  else{
    return undefined;
  }
}


//4. NEW Operator
var NEW = function(fn, args){
  var obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, args);
  return obj;
}

var Person = function(name){
  this.name = name;
};
Person.prototype.speak = function(){
  console.log(this.name+" is speaking");
};
var person = NEW(Person, ['smith']);
console.log(person.name);
person.speak();
