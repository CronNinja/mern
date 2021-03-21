
function isBetween(point, c1, c2){
  if(point >= c1 && point <= c2){
    return true
  }
  return false;
}
function distance(v1, v2, s){
  if(Math.abs(v2 - v1) <= s){
    return true;
  }
  return false;
}
function checkBetween(o1, o2){
   if(isBetween(o2.y, o1.y, o1.y + o1.height) || isBetween((o2.y + o2.height), o1.y, o1.y + o2.height)){
     return "verticle";
   } else if(isBetween(o2.x, o1.x, o1.x + o1.width) || isBetween((o2.x + o2.width), o1.x, o1.x + o2.width)){
    return "horizontal";
  } else {
    return "";
}

}
function wallDetection(walls, obj){
  let collision = "";
  walls.forEach((wall) => {
    let detected = checkBetween(wall, obj);
    if(detected === "verticle"){
      if(obj.direction === "left" && distance(wall.x, (obj.x + obj.velocity.x), wall.width)){
        collision = "right";
      }
      else if(obj.direction === "right" && distance(wall.x, (obj.x + obj.velocity.x), obj.width)){
        collision =  "left";
      }
    } else if(detected === "horizontal"){
      if(obj.direction === "up" && distance(wall.y, (obj.y + obj.velocity.y), wall.height)){
        collision =  "bottom";
      }
      else if(obj.direction === "down" && distance(wall.y, (obj.y + obj.velocity.y), obj.height)){
        collision =  "top";
      }
    }
  });
  return collision;
}
export { wallDetection }