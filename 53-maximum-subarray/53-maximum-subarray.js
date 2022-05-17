/**
 * @param {number[]} nums
 * @return {number}
 */

/// Sliding window

// Kadane's algorithm
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); // get current max
        maxSum = Math.max(currentSum, maxSum); // compare prev max with current max (was the current number worth keeping?)
    }
    
    return maxSum;
};


/* Technically works, but will time out for large test cases
// brute force o(n^2), o(n) 
var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    let maxSum = -Infinity; // because nums could be [-2, -1]
    
    for (let i = 0; i < nums.length; i++) {
        let currentSum = 0;
        for (let j = i; j < nums.length; j++){
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    
    return maxSum;
};
*/