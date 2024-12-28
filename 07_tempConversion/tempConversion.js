const convertToCelsius = function(num) {
  let solution = (5/9) * (num-32)
  return Math.round(solution * 10) / 10
};

const convertToFahrenheit = function(num) {
  let solution = (9/5)*(num) + 32;
  return Math.round(solution * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
