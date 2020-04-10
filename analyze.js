function analyze(array) {
  let sum = 0;
  let average;
  let min = array[0];
  let max = array[0];
  let length = array.length;

  for (let number of array) {
    sum += number;
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
  }

  average = sum / length;

  const object = {
    average: average,
    min: min,
    max: max,
    length: length,
  };
  return object;
}

module.exports = analyze;
