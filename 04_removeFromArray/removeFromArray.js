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



// Do not edit below this line
module.exports = removeFromArray;
