const fibonacci = (n) => {
    let num = Number(n);
    // corner cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num < 0) return "OOPS";
    
    let fibArray = [0, 1];

    for (let i = 2; i <= num; i++) {
        fibArray.push(fibArray[i-1] + fibArray[i-2]);
    }

    return (fibArray[fibArray.length-1]);
};


// Do not edit below this line
module.exports = fibonacci;
