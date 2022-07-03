/**
 * @param {string[]} strs
 * @return {string}
 */

/*
The approach is to take 1 word from the list and compare its prefixes against all other words;
If during the loop we find a difference, return the prefixes we have confirmed as true so far

T: O(m*n) , m is the length of the word holding as test case, and n is the length of the list of words
S: O(1) , we're only keeping a string

*/

/*
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    let ans = "";
    
    for(let i = 0; i < strs[0].length; i++) {
      for(let j = 0; j < strs.length-1; j++) {
          if(strs[j][i] !== strs[j+1][i]) return ans;
      }
      ans += strs[0][i];
    }
    
    return ans;
};
*/

var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    strs.sort();
    let res = "";
    
    for(let i = 0; i < strs[0].length; i++) {
        if(strs[0][i] === strs[strs.length-1][i]) {
            res += strs[0][i]
        } else {
            break;
        }
    }
    
    return res;
}
