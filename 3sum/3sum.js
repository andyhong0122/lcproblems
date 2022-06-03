/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// o(n^2), increase in input size grows the elements to visit
// o(log n), the only auxiliary space we're using is when we're sorting

var threeSum = function(nums) { // [-4, -1, -1, 0, 1, 2]
    if(nums.length < 3) return []; 
    nums.sort((a,b) => a - b); // n log n, will not change overall time
    
    let triplets = [];
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        checkTarget(nums, i, triplets);
    }
    
    return triplets;
}

function checkTarget(nums, i, triplets) {
    let l = i + 1;
    let r = nums.length - 1;
    
    while (l < r) {
        let target = nums[i] + nums[l] + nums[r];
        
        if (target < 0) {
            l++;
        }
         else if (target > 0) {
            r--;
        }
        
        if(target === 0) {
            triplets.push([nums[i], nums[l], nums[r]]);    
            while(nums[l] === nums[l+1]) { // skip duplicate numbers from left
                l++;
            } 
            while(nums[r] === nums[r+1]) { // skip duplicate numbers from right
                r--;
            }
            l++;
            r--;
        }
    }
}

