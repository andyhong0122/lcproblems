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
 
     // T.C: O(N)
    // S.C: O(H)
 */

// in-order traversal
// o(n), visit each node once
// o(h), worst case scenario our recursive stack will pile up as much as the height of a tree that is skewed
var isValidBST = function(root) {
    // in order because we're trying to get sorted array
    function inOrder(node) {
        if (!node) {
          return [];  
        } 
        return [ ...inOrder(node.left), node.val, ...inOrder(node.right) ]
    }
    
    const sortedArr = inOrder(root)
    
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i+1] <= sortedArr[i]) return false;
    }
    return true;
};


/*
var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
      

        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};
*/
