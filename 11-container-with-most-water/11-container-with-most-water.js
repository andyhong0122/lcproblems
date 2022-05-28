/**
 * @param {number[]} height
 * @return {number}
 */

// two

// The idea is to find the maximum area of the rectangle that is filled with water. An intuitive, brute force way to solve this is to find all possible container sizes.
// But this approach would render a o(n^2) time complexity.
// To solve this in o(n) time, we can approach with a two-pointer technique, where we can begin comparing from left-most and right-most.
// The idea is to keep track of the max area we've seen, while moving the pointer that is currently on a shorter container.

// o(n^2) - this solution works on small sizes, but will time out on submission
/*
var maxArea = function(heights) {
    let max = 0;
    
    for (let i = 0; i < heights.length; i++) {
        for ( let j = i + 1; j < heights.length; j++) {
            const min = Math.min(heights[i], heights[j]);
            max = Math.max(max, min * (j - i));
        }
    }
    
    return max;
};
*/

// o(n), we visit each height only once
// o(1), only using constants
var maxArea = function(heights) {
    let l = 0;
    let r = heights.length - 1;
    let max = 0; 
    
    while (l < r) {
        const min = Math.min(heights[l], heights[r]);
        max = Math.max(max, min * (r - l));
        
        if (heights[l] <= heights[r]) {
            l++;
        } else {
            r--;
        }
    }
    
    return max;
}