//DOT operator

var DOT = function(object, attr){
  if(object.hasOwnProperty(attr)){
    return object[attr];
  }
  else if(object.__proto__)
    {
        DOT(object.__proto__, attr);
    }
}
