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

/*
             3
          /     \
        9        20
       / \       / \
      n   n     15  7
                /\  /\
               n n  n n
*/
var maxDepth = function(root) {
    if(!root) return 0;
    
    // traverse left until we hit leaf - null
    const leftHeight = maxDepth(root.left);
    
    // traverse right until we hit leaf - null
    const rightHeight = maxDepth(root.right);
    
    // after left and right height have have returned, just get return the longer of the two, and add 1 (for the root)
    return Math.max(leftHeight, rightHeight) + 1; 
};
/*

// Queue, for each level, increment level

*/ 
var maxDepth = function(root) {
    if(!root) return 0;
    let levels = 0; 
    let queue = []; 
    
    // begin queue by pushing in root
    queue.push(root);
    
    while(queue.length > 0){
        // len is constant because we want to iterate only the same level
        const len = queue.length; 
        for(let i = 0; i < len; i++){ 
            const node = queue.shift();
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left); 
        }
        
        levels++; // after visiting all nodes on the same level, increment counter
    }
    return levels;
};