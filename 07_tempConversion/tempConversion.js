const convertToCelsius = (f) => {
    let temp = (f-32)/1.8;
    return Number(temp.toFixed(1));
};

const convertToFahrenheit = (c) => {
    let temp = (c*1.8)+32;
    return Number(temp.toFixed(1));
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
