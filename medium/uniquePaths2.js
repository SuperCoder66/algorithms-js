// https://leetcode.com/problems/unique-paths-ii/
// https://leetcode.com/submissions/detail/549295586/ Faster then 89% of Javascript Submissions

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// Now consider if some obstacles are added to the grids. How many unique paths would there be?
// An obstacle and space is marked as 1 and 0 respectively in the grid.

let storedAns = [];

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    
    if (obstacleGrid[m-1][n-1] === 1) {
        return 0;
    }
    
    for (let i=0; i<m; i++) {
        storedAns[i] = [];
        for (let j=0; j<n; j++) {
            // if (obstacleGrid[i][j] === 1) {
                storedAns[i].push(obstacleGrid[i][j] - 1);
            // } else {
            //     storedAns[i].push(-1);
            // }
        }
    }
    
    storedAns[m-1][n-1] = 1;
    
    return returnPaths(0, 0, m, n);  
};



function returnPaths(x, y, m, n) {
    
    if (x >= m || y >= n) return 0;
    
    if (storedAns[x][y] === -1) {
        storedAns[x][y] = returnPaths(x, y+1, m, n) + returnPaths(x+1, y, m, n);
    }
    
    return storedAns[x][y];
}
