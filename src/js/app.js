'use strict';
const arr1 = [2, 2, 2, 2];
const arr2 = [1, 2, 3, 2];

function countTokens(arr1, arr2) {
  let redTokens = 0;
  let whiteTokens = 0;
  const arr2Copy = [...arr2];

  arr1.forEach((num, index) => {
    if (num === arr2[index]) {
      redTokens++;
      arr2Copy[index] = null; 
    } else if (arr2Copy.includes(num)) {
      whiteTokens++;
      arr2Copy[arr2Copy.indexOf(num)] = null; 
    }
  });

  return { redTokens, whiteTokens };
}

const { redTokens, whiteTokens } = countTokens(arr1, arr2);
console.log(redTokens, whiteTokens);
