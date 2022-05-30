/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */

// two pointers

// o(n), iterate over colors once
// o(1), constant space
var minCost = function(colors, neededTime) {
    if (colors.length === 1) return 0;
    
    let total = 0;
    let l = 0;
    let r = 1;
    
    while (r < colors.length) { 
        if (colors[l] !== colors[r]) {
            l = r; 
        } else {
            total += Math.min(neededTime[l], neededTime[r]);
            
            if (neededTime[l] < neededTime[r]) {
                l = r;
            }
        }
        
        r++;
    }
    
    return total;
};

// using two pointers, traverse through the array
// if we find two consecutive balloons, remove the one with smaller time
