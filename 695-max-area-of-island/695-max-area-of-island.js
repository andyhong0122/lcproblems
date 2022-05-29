/**
 * @param {number[][]} grid
 * @return {number}
 */

// we can solve this using bfs;

const directions = [[1,0], [0,1], [-1,0], [0,-1]];

var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    let height = grid.length;
    let length = grid[0].length;
    
    for (let x = 0; x < height; x++) {
        for (let y = 0; y < length; y++) {
            const tile = grid[x][y];
            
            if (tile === 1) {
                bfs([x, y]);
            }
        }
    }
    
    // the definition of a bfs is adding all immediate neighbours first, so we'll use a queue for that logic
    function bfs(tile) {
        // the directions we want to explore from the tile
        let queue = [];
        queue.push(tile);
        let areaSum = 0; 
        
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            
            // for this case we don't want to add a tile's neighbours; if x or y are on the last row, we know they're not islands because islands should 
            let outBound = x < 0 || y < 0 || x >= height || y >= length;
            if (outBound || grid[x][y] === 0) {
                continue;
            // else we want to add the neighbours and add to area sum
            } else {
                areaSum++;
                grid[x][y] = 0;
            
                for (let d of directions) {
                    queue.push([x + d[0], y + d[1]]);
                }
            }
        }
        
        maxArea = Math.max(maxArea, areaSum);
    }
    
    return maxArea;
};

