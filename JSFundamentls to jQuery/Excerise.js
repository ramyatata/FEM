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


//INSTANCEOF operator
var INSTANCEOF = function(obj, fun){
  if(obj.__proto__ === fun.prototype){
    return true;
  }
  else if(obj.__proto__){
    return INSTANCEOF(obj.__proto__, fun);
  }
  else{
    return false;
  }
};

var Person = function(name){
  this.name = name;
};
var person = new Person("smith");
console.log(INSTANCEOF(person, Person))

//$.extend 
var extend = function(target, object){
  //loop through object properites
  //add them to target
  for(var key in objects){
    if(object.hasOwnProperty(key)){
      target[key] = object[key];
    }
  }
  return target;
};

var target = {name: "smith"};
var object = {year: "1988"};
var res = extend(target,object);

//isArray
var isArray = function(obj){
  if(Object.prototype.toString.call(obj) === "[object Array]"){
    return true;
  }
  else{
    return false;
  }
}

//isArrayLike
var isArrayLike = function(obj){
  //has length property
  //has a property length-1
if(typeof obj.length === "number"){
  if(obj.length === 0){
    return true;
  }
  else if(object.length >0){
    if(obj.length-1 in obj){
      return true;
    }
    else{
      return false;
    }
  }
}
  else{
    return true
  }
}

//$.each
var each = function(collection, fun){
  if(isArrayLike(collection)){
    for(var i=0; i < collection.length; i++){
      var val = collection[i];
      fun.call(i, collection[i]);
    }
  }
  else{
    for(var keys in Collection){
      if(collection.hasOwnProperty(keys)){
        var val = collection[keys];
      fun.call(keys, collection[keys])
      }
    }
  }
  return collection
}



