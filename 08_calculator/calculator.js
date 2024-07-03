const add = function(x,y) {
    return x+y;	
};

const subtract = function(x,y) {
    return x-y;	
};

const sum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum;
};

const multiply = function(arr) {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum *= arr[i];
    }
    return sum;
};

const power = function(x,y) {
    return Math.pow(x, y);	
};

const factorial = function(n) {
    let result = n;
    if (n === 0 || n === 1) { return 1 };

    while (n > 1) {
        n--;
        result *= n;
    }

    return result;
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
