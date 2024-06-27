const sumAll = function(x, y) {
    if (x < 0) { return "ERROR" };
    if (y < 0) { return "ERROR" };

    let order = biggestOfTwo(x, y);

    let start = order[0];
    let end = order[1];

    let arr = [];
    
    for (let i = start; i <= end; i++) {
        arr.push(i); 
    }
    
    return sum(arr);
};


const sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }

    return sum;
}

const biggestOfTwo = (x, y) => {
    let arr = [];
    if (x < y) {
        arr.push(x);
        arr.push(y);
    } else {
        arr.push(y);
        arr.push(x);
    }
    return arr;
}

console.log(sumAll(1, 5));
