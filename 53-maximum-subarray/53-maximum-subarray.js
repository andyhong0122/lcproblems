/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane's algorithm - sliding window
// O(n), iterate over numbers once
// O(1), using only constants
var maxSubArray = function(nums) {
    // set curr and max to first number
    let curr = nums[0];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // find whether adding the nums[i] to curr was "worth" it
        curr = Math.max(nums[i], curr + nums[i]);
        max = Math.max(curr, max);
    }
    
    return max;
}


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