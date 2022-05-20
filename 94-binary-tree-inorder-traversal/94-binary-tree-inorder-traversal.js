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
 * @return {number[]}
 */


/*
For DFS, we use a stack because we want to explore depth first.
Inorder - LNR
*/
function inorderTraversal(root) { 
    // stack to keep track of which nodes visited/to visit
  const stack = []; 
    // array to keep our nodes
  const res = []; 

    // as long as our our stack has nodes inside, we have not finished our traversal
    // or as long as root is not null 
  while (root || stack.length) { // check for root because we want to 
    if (root) {
      stack.push(root); // if current node is not null, defer it to the stack
      root = root.left; // move current node to the left; we're moving to the most left as possible
    } else {
      root = stack.pop(); // get current node from stack; the first time we hit this will be the leftmost node
      res.push(root.val); // push current node value into res[] 
      root = root.right; // move current node to the right 
    }
  }

    // at the end of iteration, return res[]
  return res; 
}


/*
function inorderTraversal(root) {
    let s = [root];
    let res = [];
    
    while (s.length > 0) {
        let n = s.pop();
        res.push(n.val);
        
        if (n.right) s.push(n.right);
        if (n.left) s.push(n.left);
    } 
    
    return res;
}
*/

/*
var inorderTraversal = function(root) {
    if(!root) return [] // base case
    
    const left = inorderTraversal(root.left); 
    const right = inorderTraversal(root.right); 
    
    return [ ...left, root.val, ...right];
}
*/
