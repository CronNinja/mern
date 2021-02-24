const calc = (x, y, op) => {
  if(typeof(x) !== "number" || typeof(y) !== "number") return "Did not receive a number";
  switch (op) {
    case '+':
      return x + y;
      break;
    case '-':
      return x - y;
      break;
    case '*':
      return x * y;
      break;
    case '/':
      if(y === 0) return "Can't divide by 0.";
      return x / y;
      break;
    default:
      return "Did not receive a correct operator";
      break;
  }
};
module.exports = calc;