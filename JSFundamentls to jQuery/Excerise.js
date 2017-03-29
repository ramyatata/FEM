//DOT operator

var DOT = function(object, attr){
  if(object.hasOwnProperty(attr)){
    return object[attr];
  }
  else
    {
      if(object.__proto__ !== null){
        DOT(object.__proto__, attr);
      }
      else{
        return undefined;
      }
    }
}
