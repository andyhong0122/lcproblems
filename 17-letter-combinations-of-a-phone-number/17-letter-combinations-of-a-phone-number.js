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



