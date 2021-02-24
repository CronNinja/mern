const greet = (name = null) => {
  if(name === null){
    return 'Hello there!';
  }
  else if(Array.isArray(name) === true){
    return 'Hello, ' + name.join(", ");
  }
  else if(name.toUpperCase() === name){
    return 'HELLO ' + name + '!';
  }
  else{
    return 'Hello, ' + name;
  }
};

module.exports = greet;