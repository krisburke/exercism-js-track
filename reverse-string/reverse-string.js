
export const reverseString = (str) => str.split('').reverse().join('');

export const reverseStringWithoutBuiltins = (str) => {
  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};

export const reverseStringWithRecursion = (str) => {
  return (str === '') ? '' : reverseStringWithRecursion(str.substr(1)) + str.charAt(0);
};
