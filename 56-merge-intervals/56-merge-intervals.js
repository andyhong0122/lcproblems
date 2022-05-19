/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
intervals array is sorted
no negative numbers
intervals length can be 1

1. for each intervals in the array
2. if n[1] is greater than or equal to n+n[0], we know there's an overlap
    when there's an overlap, construct an interval that encompasses all overlapping elements,
    starting from the n[0] and ending on n+n[1].
    add this interval to the results array
3. if n[1] is less than n+1[0], they do not overlap
4. at the end of the loop return the results array
*/

var merge = function(intervals) {
    if(intervals.length === 1) return intervals;
    let results = [];
    intervals.sort((a,b) => a[0] - b[0])
    
    let length = intervals.length;

    for(let i = 0; i < length; i++) {
        const curr = intervals[i];
        const next = intervals[i+1];
        
        // check bounds; if it's the last element we don't even have to compare, just push it in
        if(i < length - 1 && curr[1] >= next[0]){
            
            if (curr[1] >= next[1]) {
                results.push([curr[0], curr[1]]);
            } else {
                results.push([curr[0]], next[1]);
            }
            i++;
            
        // would only run if it's last element and has no elements to compare OR
        // intervals are not in range
        } else {
            results.push(curr);
            results.push(next);
            i++;
        }
    }
    
    return results;
};



/*
We can do a one pass solution with a sorted intervals array
after sorting the array, use a stack to store the first interval pair and begin a for loop;
for every interval following the first, compare the ending time of the current interval[1] with the
starting time of the consecutive interval[0]
By comparing PREVIOUS and CURRENT instead of CURRENT and NEXT, we don't have worry about going out of bounds.
*/

var merge = function(intervals) {
    if(intervals.length === 1) return intervals;
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    let stack = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let prev = stack.pop();
        let curr = intervals[i];
        if (prev[1] >= curr[0]) {
            stack.push( [prev[0], Math.max(prev[1], curr[1])] );
        } else {
            stack.push(prev, curr);
        }
    }
    
    return stack;
    // Time Complexity: O(Nlog(N))
    // Space Complexity: O(N)
};

// (1) [[1,3], [2,6]] => [[1,6]]
// (2) [[1,4],[2,3]] => [[1,4]]
// Two possible cases to perform merger:
// 1st case: we merge two arrays and obtain a bigger interval
// 2nd case: one array absorbs another array and the size doesn't change.
// Therefore, to cover both cases, when we merge two arrays, we perform the following:
// [start of first arr, max(end of first arr, end of second arr)]
