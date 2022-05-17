/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // ! getting out mid val
    if (nums[mid] === target) { // ! if mid val is equal to target we will return the mid 
      return mid;
    } else if (nums[mid] < target) { 
      left = mid + 1; /// ! if mid val is less than target we will move the left pointer to mid+1
    } else {
        right = mid - 1; // ! if mid val is greater than target we will move the right pointer mid-1
    }
  }
  //! if we cant find the target we will return -1
  return -1;
};
