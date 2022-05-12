/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(map.has(complement)){
            return [i, map.get(complement)];
        }
        map.set(nums[i], i);
    }
    
    return false;
};

var twoSum = function(nums, target){
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] >= 0) {
            return [i, map[complement]]
        }
        
        map[nums[i]] = i;
    }
    
    return false;
}