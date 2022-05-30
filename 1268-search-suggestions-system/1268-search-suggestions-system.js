/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// 

var suggestedProducts = function(products, searchWord) { 
    if(!searchWord) return []
    products.sort(); 
    
    let list = [];
    let suggestions = [];
    
    let curr = "";
    let left = 0;
    
    // for each character in word, perform search on products list
    for (let i = 0; i < searchWord.length; i++) {
        curr += searchWord[i];
        
        // search through all products (remember they're sorted)
        for (let j = 0; j < products.length; j++) {
            
            // narrow down the search in the proudcts list: as long as don't see any matching letters, increment left
            // For example: product = ["apple", "apron", "answer"]; if our search word is "b", then we want to skip over all our options
            // while(left < products.length - 1 && products[left].substring(0, i) !== curr) left++;
            // while(right > left && products[right].substring(0, i) !== curr) right--
            
            if(suggestions.length === 3) break;
            else if(products[j].substring(0, i + 1) === curr) suggestions.push(products[j]);
        }
        list.push(suggestions);
        suggestions = [];
    }
    
    return list;
};

