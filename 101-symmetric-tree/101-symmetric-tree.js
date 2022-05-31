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
        // if t1 and t2 are at null at the same time, means both have reached a leaf node at the same time
        if(!t1 && !t2) return true;
        
        // if either t1 or t2 are null; OR t1 and t2 are not the same, return false
        if(!t1 || !t2 || t1.val !== t2.val) return false;
        
        // call recursive function to traverse down the tree while comparing mirror nodes of each other
        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }
};

// o(n)
// o(n)
var isSymmetric = function(root) {
    // if there is no root that means it is an empty tree
    if(!root) return true;
    
    // start 2 queues one for left and one for right branch
    let q1 = [];
    let q2 = [];
    
    // push into queue the nodes we want to compare
    q1.push(root.left);
    q2.push(root.right)
    
    // traverse through both branches, until they are both exhausted at the same time
    while (q1.length && q2.length){
    // get current left and compare it to the right of each branch
        let node1 = q1.shift();
        let node2 = q2.shift();

        // if both are null at the same time, just move on
        if(!node1 && !node2) continue;
        // if either node1 or node2 are false || two nodes values are not equal, return false
        if(!node1 || !node2 || node1.val !== node2.val) return false;
        
        // !important; push into queue in alternating fashion; this ensures when we pop on 71, 72 we're getting the             right child from left branch and left child from right branch, and vice versa 
        q1.push(node1.left);
        q2.push(node2.right);
        q1.push(node1.right);
        q2.push(node2.left);
        
    }
    // at the end of queue, all nodes have been visited from left and right subtree and if no different nodes were           found, return true
    return true;
};


