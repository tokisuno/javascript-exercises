const removeFromArray = function(arr, ...value) {
    let i = arr.length;
    while (i--) {
        for (let j = value.length; j >= 0; j--) {
            if (arr[i] === value[j]) {
                arr.splice(arr.indexOf(value[j]), 1);
            }
        }
    }
    return arr;
};

let testArr = [1, 2, 3, 4, 5, 2];

console.log(removeFromArray(testArr, 2, 3, 4));
