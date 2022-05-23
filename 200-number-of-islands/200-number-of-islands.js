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
/*
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
*/