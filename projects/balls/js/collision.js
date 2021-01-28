function distance(v1, v2, s){
  if(Math.abs(v1 - v2) < s ){
    return 1;
  }
  return 0
}
function detectCollision(object1, object2){
  let checkXLeft = distance(object1.y, object2.y, object2.height) + distance(object2.x, object1.x, object1.width);
  let checkXRight = distance(object1.y, object2.y, object2.height) + distance(object1.x, object2.x, object2.width);
  let checkYTop = distance(object1.x, object2.x, object2.width) + distance(object2.y, object1.y, object1.height);
  let checkYBottom = distance(object1.x, object2.x, object2.width) + distance(object1.y, object2.y, object2.height);
  if(checkXLeft === 2) return "left";
  if(checkXRight === 2) return "right";
  if(checkYTop === 2) return "top";
  if(checkYBottom === 2) return "bottom";
  return "";
}