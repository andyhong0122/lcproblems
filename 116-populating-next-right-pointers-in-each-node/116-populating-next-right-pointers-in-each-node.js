/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

/*
We want to traverse the tree BFS; for each level we iterate through each node, and point the next pointer to the next node. 

O(n) ; we're visiting every single node once
O(n) ; at each level we can have n number of nodes
*/

var connect = function(root) {
    if(!root) return root; // empty tree
    let q = []; 
    q.push(root);
    
    while(q.length) {
        const len = q.length;
        
        for(let i = 0; i < len; i++) { 
            let n = q.shift(); 
            // if node is within bounds, set pointer to next node in queue
            if(i < len - 1) n.next = q[0];
            
            // push child nodes into queue for next iteration
            if(n.left) q.push(n.left);
            if(n.right) q.push(n.right);
        }
    }
    return root;
}


/*
O(n)
O(1)
*/
var connect = function(root) {
    if(!root) return root;
    let prev = root;
    
    while(prev.left) {
        let head = prev;
        while(head) {
            head.left.next = head.right;
            if(head.next) head.right.next = head.next.left;
            head = head.next;
        }
        prev = prev.left;
    }
    return root;
}



