/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// merge intervals using stack

// o(n log n), we're iterating over the intervals once, but sorting takes longer
// o(n), sorting algorithm uses log n space, but we're using stack anyways, which o(n) > o(log n)
var merge = function(intervals) {
    if (intervals.length == 0) return [];
    
    intervals.sort((a,b) => a[0] - b[0]);
    let stack = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let first = stack.pop();
        let second = intervals[i];
        
        if (first[1] >= second[0]) {
            if(first[1] > second[1]) {
                stack.push(first);
            } else {
                stack.push([first[0], second[1]]);
            }
        } else {
            stack.push(first);
            stack.push(second);
        }
    }
    
    return stack;
};

// same, just using Math.max
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    let stack = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let first = stack.pop();
        let second = intervals[i];
        
        if (first[1] >= second[0]) {
            stack.push([first[0], Math.max(first[1], second[1])]);
        } else {
            stack.push(first);
            stack.push(second);
        }
    }
    
    return stack;
}

// Intuitively, we need to compare the first and second numbers. 
// if first[1] >= second[0], we know they should be merged.
// else they should be separate

// in the case of merging them, we still need to know the range - [1,10], [2,3] => [1,10] because first absorbs second range
// to find this we can compare: if first[1] >= second[1], first absorbs the second, if not, second[1] is the end range

// the tricky part though is we need to keep comparing the numbers instead of discarding it
// for example, [1,10], [2,3], [3,4] => [1,10], where first absorbs second and third
// so it's important to keep track of our previous number because we need to "reuse" it
// we can use a stack to keep track of our previous number because the top of our stack wil always be the last number that we pushed in
// so this will keep track of all the numbers we pushed in