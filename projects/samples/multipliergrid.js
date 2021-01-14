// Grid

let multiplier = 1;
let column = 1;

while(column <= 10){
  let row = '';
  while(multiplier <= 10){
    row += (multiplier * column) + ' ';
    multiplier++;
  }
  console.log(row);
  multiplier = 1;
  column++;
}