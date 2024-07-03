const palindromes = (str) => {
    const filteredString = str.toLowerCase()
                    .split('')
                    .filter(item => !item.match(/[^\w\s]/g))
                    .filter(item => !item.match(' '))
                    .join('');
    const reversedFilteredString = filteredString.split('')
                                                .reverse()
                                                .join('');

    if (filteredString === reversedFilteredString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
