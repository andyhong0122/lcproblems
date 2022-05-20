/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// if a word is an anagram, when sorted should be same

/*
// o(n * n log n), for each word, we're using sort
// o(m * n), for array of strings, m strings of size to n at most
var groupAnagrams = function(strs) {
    let dict = {};
    
    for (let s of strs) {
        let key = s.split("").sort().join("");
        
        if (dict[key]) {
            dict[key].push(s);
        } else {
            dict[key] = [s];
        }
    }
    
    return Object.values(dict);
}
*/


// using charCodeAt()
// 
var groupAnagrams = function(strs) {
    let dict = {};
    
    for (let word of strs) {
        const arr = new Array(26).fill(0);
        
        for (let char of word) {
            let index = char.charCodeAt() - 97;
            arr[index]++;
        }

        let key = arr.join("#");
        if (dict[key]) {
            dict[key].push(word);
        } else {
            dict[key] = [word] ;
        }
    }
    
    return Object.values(dict);
}

