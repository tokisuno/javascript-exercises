const findTheOldest = (people) => {
    const date = new Date();
    const year = date.getFullYear();
    const oldest = people.sort((a, b) => {
        const last = (!a.yearOfDeath ? year : a.yearOfDeath) - a.yearOfBirth;
        const next = (!b.yearOfDeath ? year : b.yearOfDeath) - b.yearOfBirth;
        return (last > next ? 1 : -1);
    });

    return oldest[oldest.length-1];
};

// Do not edit below this line
module.exports = findTheOldest;
