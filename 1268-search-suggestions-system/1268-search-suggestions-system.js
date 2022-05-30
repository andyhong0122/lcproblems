/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

// 

var suggestedProducts = function(products, searchWord) { 
    if(!searchWord) return []
    
    // because we sorted products already here, our list will return in lexicographical order
    products.sort(); 
    
    let list = [];
    let suggestions = [];
    let curr = "";
 
    // for each character in word, perform search on products list
    for (let i = 0; i < searchWord.length; i++) {
        curr += searchWord[i];
        
        // search through all products (remember they're sorted)
        for (let j = 0; j < products.length; j++) {
            // if suggestions count is not 3 (yet) and if the current product substring matches our search word, push into suggestions list
            if(!(suggestions.length === 3) && products[j].substring(0, i + 1) === curr) {
                suggestions.push(products[j]);   
            }
        }
        
        // at the end of our products search, whether we have found our max number of suggestions (3) or we have found nothing, add suggestions to list
        list.push(suggestions);
        suggestions = [];
    }
    
    return list;
};

