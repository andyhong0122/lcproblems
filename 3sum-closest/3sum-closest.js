/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// two pointers

// o(n^2), inner and outer loop which grows with input size
// o(log n), sorting algorithm uses auxiliary space
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let closest = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1; 
        let right = nums.length - 1;
        
        while (left < right) {
            let localSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(localSum - target) < Math.abs(closest - target)){
                closest = localSum;                
            }
            if (localSum > target) {
                right--;  
            } 
            else {
                left++;   
            }
        }
    }
    return closest;
};

