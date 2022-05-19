/**
 * @param {number[]} nums
 * @return {number}
 */

/// using sort, O(n log n), O(1)
var longestConsecutive = function(nums) {
    let maxLen = 1;
    let current = 1;
    if (nums.length === 0) return 0;
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            break;
        }
        else if (nums[i + 1] - nums[i] === 1) {
            current++;
        }
        else if (nums[i + 1] - nums[i] === 0) {
            continue;
        }
        else {
            maxLen = Math.max(current, maxLen);
            current = 1;
        }
    }
    maxLen = Math.max(current, maxLen);
    
    return maxLen;
};

// [100,4,200,1,3,2] => [1,2,3,4,100,200] => 4

// [9,1,4,7,3,-1,0,5,8,-1,6] => [-1,-1,0,3,4,5,6,7,8,9] => 7

/// using Set, O(n), O(n)
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    let maxLen = 1;
    let set = new Set(nums);
    
    for (let number of set) {
        // if N-1 is in Set, no need to start counter yet; we only want to begin counting when we find the lowest N in a potential sequence.
        if (set.has(number - 1)) {
            continue;
        }
        
        let counter = 1;
        let currentNumber = number; // make copy of the current number for comparison
        
        while (set.has(currentNumber + 1)) {
            counter++;
            currentNumber++;
        }
        maxLen = Math.max(maxLen, counter);
    }
    
    return maxLen;
};

// [9,1,4,7,3,-1,0,5,8,-1,6] => [9,1,4,7,3,-1,0,5,8,6]
