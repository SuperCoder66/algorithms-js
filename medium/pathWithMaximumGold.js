// https://leetcode.com/problems/path-with-maximum-gold/
// https://leetcode.com/submissions/detail/551362572/ Faster then 94% of javascript submissions
// Return the maximum amount of gold you can collect from the given gold mine of size m * n, under restrictions that you can't visit a cell more than once, can only move to the four adjacent cell and can't move to a cell with 0 gold.

/**
* @param {number[][]} grid
* @return {number}
*/
const getMaximumGold = function(grid) {
    const LENX = grid.length;
    const LENY = grid[0].length;
    let sumT = 0;
  
    const run = (x, y, sum_) => {
        if (x < 0 || y < 0 || x >= LENX || y >= LENY || grid[x][y] === 0) {
            return 0;
        }
        let tmp = grid[x][y];
        let sum = sum_ + tmp;
        grid[x][y] = 0;
      
        run(x+1, y, sum);
        run(x-1, y, sum);
        run(x, y+1, sum);
        run(x, y-1, sum);
      
        grid[x][y] = tmp;
        sumT = Math.max(sumT, sum);
        return 0;
    }
    
    for (let i=0; i<LENX; i++) { 
        for (let j=0; j<LENY; j++) {
            if (grid[i][j] == 0) {
                continue;
            }
            run(i, j, 0);
        }
    }
    return sumT;
};

//---- Testing getMaximumGold

const testFn = getMaximumGold;

const test1 = [[0,6,0],[5,8,7],[0,9,0]];
const test2 = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]];

const TestCases = [test1, test2];
const SolSet = [24, 28];

for (x in TestCases) {
    const result = testFn(TestCases[x]);
    const success = result === SolSet[x];

    print2d(TestCases[x]);
    console.log('Result', result, 'Expected Result', SolSet[x]);
    if (success) {
        console.log('-----SUCESSS------');
    } else {
        console.log('-----FAIL------');
    }
}

function print2d(arr) {
    for (let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}
