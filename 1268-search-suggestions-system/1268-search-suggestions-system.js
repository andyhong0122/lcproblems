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
 
    // for each character in word, perform search on products list
    for (let i = 0; i < searchWord.length; i++) {
        curr += searchWord[i];
        
        // search through all products (remember they're sorted)
        for (let j = 0; j < products.length; j++) {

            if(suggestions.length === 3) break;
            else if(products[j].substring(0, i + 1) === curr) suggestions.push(products[j]);
        }
        list.push(suggestions);
        suggestions = [];
    }
    
    return list;
};

