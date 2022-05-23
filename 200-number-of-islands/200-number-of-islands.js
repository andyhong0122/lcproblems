/**
 * @param {character[][]} grid
 * @return {number}
 */

// bfs
var numIslands = function(grid) {
    let width = grid[0].length;
    let height = grid.length;
    let counter = 0;
    let dir = [[0,1],[1,0],[-1,0],[0,-1]]
    
    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            if(grid[row][col] === "1") {
                counter++;
                // when we encounter a "1", trigger a dfs
                visit([row, col]) 
            }
        }
    }
    
    function visit(pair) {
        let q = [pair]
        while(q.length) {
            let [row, col] = q.shift();
            let isOutofBounds = row < 0 || col < 0 || row >= height || col >= width;
            if(isOutofBounds || grid[row][col] === "0") continue;
            
            grid[row][col] = "0";
            
            for(let d of dir) {
                q.push([row + d[0], col + d[1]]);
            }
        }
    }
    
    return counter;
};

// bfs
var numIslands = function(grid) {
    // declare row and col sizes
    const length = grid[0].length;
    const height = grid.length;
    
    let counter = 0;
    const directions = [[1,0], [0,1], [-1,0], [0,-1]];
    
    // iterate through the grid
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < length; col++) {
            if (grid[row][col] === "1") {
                counter++;
                bfs([row, col]);  //[0 ,0]
            }
        }
    }
    
    // if "1" is encountered, trigger bfs, increment counter
    function bfs(bfsStartLocation) { // [0, 0]
        let queue = [bfsStartLocation];
        
        while(queue.length > 0) {
            let [x, y] = queue.shift();
            
            // skip the neighbor if: coordinates are out of bounds OR it's 0
            var isOutOfBound = x >= height || y >= length || x < 0 || y < 0;
            if (isOutOfBound || grid[x][y] === "0") {
                continue;
            } else {
                grid[x][y] = "0";
                
                // because we hit a "1", add all directions from that point; we don't have to worry about hitting the same "1" twice because we switched it to a 0 above
                for (let direction of directions) {
                    queue.push([x+direction[0], y+direction[1]])
                }
            }
        }
    }
    
    return counter;
}

/*
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
*/