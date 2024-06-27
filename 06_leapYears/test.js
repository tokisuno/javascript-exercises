const leapYears = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

console.log(leapYears(2000)); // true
console.log(leapYears(1985)); // false
console.log(leapYears(1996)); // true
console.log(leapYears(1997)); // false
