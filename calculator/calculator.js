const calculator = {
  add(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  },

  subtract(number, ...numbers) {
    let total = number;
    for (let num of numbers) {
      total -= num;
    }
    return total;
  },

  multiply(...numbers) {
    let total = 1;
    for (let num of numbers) {
      total *= num;
    }
    return total;
  },
  divide(number, ...numbers) {
    let total = number;
    for (let num of numbers) {
      total /= num;
    }
    return total;
  },
};

module.exports = calculator;
