function isBetween(v1, c1, c2){
  if(v1 >= c1 && v1 <= (c1 + c2)) return true;
  return false;
}
function distance(v1, v2, s){
  if(Math.abs(v2 - v1) <= s){
    return true;
  }
  return false;
}
function detectCollision(object1, object2){
  if(isBetween((object1.y + object1.height), object2.y, object2.height) || isBetween(object1.y, object2.y, object2.height)){
    if(distance((object1.x + object1.velocity.x), object2.x, object1.width)) {
      return "left";
    }
    else if (distance((object1.x - object1.velocity.x), object2.x, object2.width)){
      return "right"
    }
  } else if (isBetween((object1.x + object1.width), object2.x, object2.width) || isBetween(object1.x, object2.x, object2.width)){
    if(distance((object1.y + object1.velocity.y), object2.y, object1.height)) {
      return "top";
    }
    else if (distance((object1.y - object1.velocity.y), object2.y, object2.height)){
      return "bottom"
    }
  }
  return "";
}
function wallDetection(walls, obj){
  walls.forEach((wall) => {
    let dC = detectCollision(obj, wall);
    if(dC === 'right' && obj.direction === "left"){
      obj.velocity.x = 0;
    //  obj.x = wall.x + wall.width + 5;
    }
    else if(dC === 'left' && obj.direction === "right"){
      obj.velocity.x = 0;
  //    obj.x = wall.x - obj.width - 5;
    }
   else  if(dC === 'bottom' && obj.direction === "up"){
      obj.velocity.y = 0;
      obj.y = wall.y + wall.height + 5;
    }
    else if(dC === 'top' && obj.direction === "down"){
      obj.velocity.y = 0;
      obj.y = wall.y - obj.height - 5;
    }
  });
}