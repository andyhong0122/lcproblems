/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
BS; if mid is target, then start two pointers from there, "start" and "end"
"start" will -- as we see same number
"end" will ++ as we see same number
assign start and end to result as tuple
*/

var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    let result = [-1, -1]
    
    while(left <= right){
        let mid = Math.floor(right + left / 2);
        let start = mid;
        let end = mid;
        
        if(target === nums[mid]){
            while(nums[start] === nums[start - 1]) start--
            while(nums[end] === nums[end + 1]) end++
            result[0] = start;
            result[1] = end;
            return result;
        }
        
        if(target < nums[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
};