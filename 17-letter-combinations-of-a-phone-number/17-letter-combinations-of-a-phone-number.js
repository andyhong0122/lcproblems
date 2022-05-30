/**
 * @param {string} digits
 * @return {string[]}
 */

/*
the idea behind the recursion for this solution is to take the first digit and expand out from there;
if the number is "23", then we span out from "a", "b", "c" and pair each letters to "def"
our base case is the length of our string; for "23", the max length of string is 2, so push into result if our base case reaches a string length of 2.
*/

const map = {
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r","s"],
        8: ["t","u","v"],
        9: ["w","x","y","z"],
}

// o(n), 
var letterCombinations = function(digits) {
    let combinations = [];
    
    // in case digits.length is 0, we don't return anything
    if (digits.length === 0) return combinations;
    // in case digits.length is 1, return the characters of that digit from the map
    if (digits.length === 1) return map[digits[0]];
    
    function permute(string, digitIndex) { 
        // base case: string is at digits length; if "23", then digits length cannot be longer than 2
        if (string.length === digits.length) {
            combinations.push(string);
            return;
        }
        
        // recursive case: if string is not as long as digits yet, find the combination of characters from the map, and call recursive function again with the string + all digits of the digit index
        const digit = map[digits[digitIndex]];
        for (char of digit) {
            permute(string + char, digitIndex + 1)
        }
        
    }
    
    permute("", 0);
    
    return combinations;
};

// Time O(3^N * 4^M)
//   N is the number of digits in the input that maps to 3 letters (e.g. 2, 3, 4, 5, 6, 8)
//   M is the number of digits in the input that maps to 4 letters (e.g. 7, 9)
//
// Space O(3^N * 4^M) since one has to keep O(3^N * 4^M) solutions.
function letterCombinations(digits) {
  if (digits == null || digits.length === 0) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const res = [];
  const go = (i, s) => {
    if (i === digits.length) {
      res.push(s);
      return;
    }

    for (const c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };

  go(0, '');
  return res;
};


