const reverseString = function(string) {
    let splitString = string.split("");
    splitString = splitString.reverse();
    let result = splitString.join("");

    return result;
};

// Do not edit below this line
module.exports = reverseString;
