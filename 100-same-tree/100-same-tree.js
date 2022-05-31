/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

/*
var isSameTree = function(p, q) {
   if(!p && !q) return true;
   if(!p || !q || p.val !== q.val) return false
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
*/

/*
an interative way to solve this is to store both root nodes into a stack as a tuple, and run
bfs/dfs on the pair. Pop out the tuple on each iteration, and compare their values -- if they're the same, continue by pushing into the stack the left and right as tuples again
*/

var isSameTree = function(p, q) {
    let stack = [[p,q]];
    
    while (stack.length){
        let [x,y] = stack.pop();
		
        if (x==null && y==null) continue; 
        if(!x || !y) return false;
        if(x.val == y.val){
            stack.push([x.left, y.left]);
            stack.push([x.right, y.right]);
        }
        else return false;
    }
    return true;
}
