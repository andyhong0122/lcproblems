/**
 * @param {string} s
 * @return {number}
 */

//// Sliding Window

// using HashMap; O(n)
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let longest = 0;
    let map = new Map();
    
    for (let left = 0, right = 0; right < s.length; right++) {
        const newChar = s[right];
        
        if (map.has(newChar)) {
            left = Math.max(map.get(newChar) + 1, left);
        }
        
        longest = Math.max(longest, right - left + 1)
        map.set(s[right], right)
    }
    
    return longest;
};
