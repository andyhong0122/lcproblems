/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// iterative approach - dfs; doesn't matter what type of dfs
// O(n), we visit node once
// O(n), our stack will contain a max of N/2 nodes if the tree is skewed to either side
var goodNodes = function(root) { // [3,1,4,3,null,1,5]
    let stack = [];
    stack.push([root, root.val]);
    
    let goodNodes = 0;
    
    while (stack.length > 0) {
        // [node(3), 3] // we're on the root node in our first iteration
        let [node, maxSoFar] = stack.pop(); 
        
        // 3 >= 3, true so increment
        if (node.val >= maxSoFar) goodNodes++;
        
        if (node.left) {
            // push the left subtree [node(1), 3]
            stack.push([node.left, Math.max(node.val, maxSoFar)]); 
        }
        
        if (node.right) {
            // push the right subtree [node(4), 3]
            stack.push([node.right, Math.max(node.val, maxSoFar)]); 
        }
    }
    
    return goodNodes;
};

// recursive approach - dfs
// O(n), visit nodes once
// O(n), our call stack can be as large as the height H of the tree; so in the worst case scenario, H = N, if tree is skewed.
var goodNodes = function(root) { 
    // add globally
    let goodNodes = 0;
    
    dfs(root, root.val);
    
    function dfs(node, maxSoFar) {        
        if (node.val >= maxSoFar) {
            goodNodes++;
        }
        
        // for each sides, call recursive function with [node, max]
        if (node.left) dfs(node.left, Math.max(node.val, maxSoFar));
        if (node.right) dfs(node.right, Math.max(node.val, maxSoFar));
    }
    
    return goodNodes;
}
