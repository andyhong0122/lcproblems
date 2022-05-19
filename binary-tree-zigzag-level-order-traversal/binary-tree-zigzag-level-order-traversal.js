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
 * @return {number[][]}
 */

/*
O(n) ; visiting all nodes in tree
O(n) ; using a queue to store nodes
*/

/*
            3
           / \
          9   20
             /  \
            15   7
*/

var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let q = [];
    let ans = [];
    let isOrderLeft = true; // standard direction
    q.push(root);
    
    while(q.length){
        let length = q.length; // 1
        let currentLevel = [];
        
        for(let i = 0; i < length; i++){ // 1
            let n = q.shift();
            
            // push children into for our next iteration of the level
            if(n.left) q.push(n.left) // 9
            if(n.right) q.push(n.right) // 20
            
            // if direction is left -> right, push to end of queue
            if (isOrderLeft) currentLevel.push(n.val)
            // if direction is right <- left, push to start of queue
            else currentLevel.unshift(n.val)
        }
        // reverse the direction
        isOrderLeft = !isOrderLeft;
        // after end of each level, push into results
        ans.push(currentLevel)
    }
    
    return ans;
};

var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let q = [root];
    let ans = [];
    let isOrderLeft = true;
    
    while (q.length) {
        let length = q.length;
        let currentLevel = [];
        
        for (let i = 0; i < length; i++) {
            let n = q.shift();
            
            if (isOrderLeft) currentLevel.push(n.val);
            else currentLevel.unshift(n.val);
            
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
        isOrderLeft = !isOrderLeft;
        ans.push(currentLevel);
    }
    
    return ans;
}




