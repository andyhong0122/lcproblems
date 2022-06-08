/**
 * @param {string} s
 * @return {string}
 */

// two pointers

// o(n ^ 2), for each character, worst case expand out n many times
// o(1), constant variables
var longestPalindrome  = function(s){
    let longest = "";
    for(let i = 0; i < s.length; i++){
        const oddLength = findLongestFromIndex(s, i, i)
        const evenLength = findLongestFromIndex(s, i, i + 1)
        let longer = oddLength.length > evenLength.length ? oddLength : evenLength
        if (longer.length > longest.length) longest = longer;
    }
    return longest;
}

function findLongestFromIndex (str, i, j){
    let palindrome = "";
    // as long as i and j are within bounds are equal
    while(i >= 0 && j < str.length && str[i] === str[j]){
        palindrome = str.slice(i, j + 1)
        i--;
        j++;
    }
    return palindrome;
}
