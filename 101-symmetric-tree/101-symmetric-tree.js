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
 * @return {boolean}
 */

/*
One condition that must always meet is left and right subtrees share the same root.

             1
          /     \
        2         2
       / \       / \
      3   4     4   3
     /\   /\    /\  /\
    n  n  n n  n n  n n
   
For the tree above, both "2" has two children
The left "2" has left subtree of 3, and right "2" has right subtree of 3
The left "2" has right subtree of 4, and right "2" has left subtree of 4

Given these conditions that must be met for every node, we can solve this recursively

*/
var isSymmetric = function(root) {
     // entry point to recursion; will return boolean
    return isMirror(root.left, root.right); 
    
    function isMirror(t1, t2) {
        // if t1 and t2 are at null at the same time, this call is true
        // if(!root) return true;
        if(!t1 && !t2) return true;
        
        // if either t1 OR t2 are null; OR t1 and t2 are not the same, return false
        if(!t1 || !t2 || t1.val !== t2.val) return false;
        
        // both statements must return true
        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }
};

