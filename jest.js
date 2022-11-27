const functions = {
  capitalize: (str) => {
    const firstLetterCap = str.charAt(0).toUpperCase() + str.slice(1);
    return firstLetterCap;
  },
  reverseString: (str) => str.split('').reverse().join(''),
  calculator: {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
  },
  caesarCipher: (str, numToShift) => {
    let arr = str.split('');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let shiftedLetter = String.fromCharCode(arr[i].charCodeAt(0) + numToShift);
      newArr.push(shiftedLetter);
    }
    return newArr.join('');
  },
  analyzeArray: (arr) => {
    return {
      average: Math.round(arr.reduce((acc, curr) => acc + curr, 0) / arr.length),
      min: arr.reduce((acc, curr) => Math.min(acc, curr)),
      max: arr.reduce((acc, curr) => Math.max(acc, curr)),
      length: arr.length,
    };
  },
};

module.exports = functions;
