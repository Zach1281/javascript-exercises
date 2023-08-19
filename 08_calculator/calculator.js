const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  if(a > b){ return a - b; }
  else{ return b - a; }
};

const sum = function(array) {
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
};

const multiply = function(array) {
  let product = 1;
  for(let i = 0; i < array.length; i++){
    product *= array[i];
  }
  return product;
};

const power = function(a, b) {
	let product = 1;
  const factor = a;
  for(let i = 0; i < b; i++){
    product *= factor;
  }
  return product;
};

const factorial = function(n) {
	if(n === 0 || n === 1){
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
