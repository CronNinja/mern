function diceRoller(count, zero = false){
  if(zero){
    return Math.floor(Math.random() * count);
  }
  return Math.floor(Math.random() * (count - 1)) + 1;
}

function test(){
  for (let index = 0; index < 10; index++) {
    console.log(diceRoller(1, true));
  }
}

test();
