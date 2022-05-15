/**
 * @param {string} s
 * @return {string}
 */

/*
Use a queue because words in back need to come to front

1. Declare result to hold all words, and word to hold current word
2. For each character in string(s)
    Check if current char is " "
        If temp word holder has any letters in it, join the word and unshift to result
        Reset temp word holder
    Else, we know current char is valid char
        Add character to temp word holder
3. At the end of the loop, check if temp word holder has any letters left
    If true, join word and unshift to result
4. Join all words in the result array and return

Time: O(n)
Space: O(n)
*/

function reverseWords(s) {
    let result = []
    let word = []

    for(char of s) {
        if(char === " ") {
            if(word.length) {
                result.unshift(word.join(""))
                word = []
            }
        } else {
            word.push(char)
        }
    }
    
    if(word.length) result.unshift(word.join(""))
    
    return result.join(" ")
}


/// implementing custom method for built-in methods
// O(n), number of characters in input string
// O(n), to store the result of split by spaces
class StringManipulation{
    reverse(arr){
        let reversed = []
        for(let i = arr.length - 1; i >= 0; i--){
            reversed.push(arr[i])
        }
        return reversed
    }
}

var reverseWords = function(s) {
    let stringMethod = new StringManipulation()
    let splitArray = s.trim().split(" ").filter((s) => s !== "")
    return stringMethod.reverse(splitArray).join(" ")
};

