/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var spiralOrder = function(matrix) {
    if(matrix.length === 0) return []
    let col = matrix.length;
    let row = matrix[0].length;
    let result = [];
    
    // declare the boundaries of the matrix
    let top = 0;
    let right = row - 1;
    let bottom = col - 1;
    let left = 0;
    
    let direction = "right"
    

    while(result.length < col * row) {
        if(direction === "right"){
            for(let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++;
            direction = "bottom"
        }
        
        else if(direction === "bottom") {
            for(let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;
            direction = "left"
        }
        
        else if(direction === "left") {
            for(let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
            direction = "top"
        }
        
        else if(direction === "top") {
            for(let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
            direction = "right"
        }
    }
    
    return result;
};

var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    
    // get matrix height and length
    let col = matrix.length;
    let row = matrix[0].length;
    let result = [];
    
    // matrix boundaries
    let top = 0;
    let right = row - 1;
    let bottom = col - 1;
    let left = 0;
    
    let direction = "e";
    
    while (result.length < col * row) {
        if (direction === "e") {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);;
            }
            top++;
            direction = "s";
        } else if (direction === "s") {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--;
            direction = "w";
        } else if (direction === "w") {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
            direction = "n";
        } else if (direction === "n") {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
            direction = "e"
        }
    }
    return result;
}