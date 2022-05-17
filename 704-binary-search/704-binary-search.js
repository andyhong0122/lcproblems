/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/// Binary search

// O(log n)


const search = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] === target) {
            return m;
        } else if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    
    return -1;
}