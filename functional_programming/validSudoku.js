// https://leetcode.com/problems/valid-sudoku/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 const isValidSudoku = (board) => {
    
    const validatePoints = (points) => {
        let seen = new Array(10).fill(false);
        let ans;
        points.map(x => board[x[0]][x[1]]).filter(x => x !== '.').map(x => Number(x)).every( x => ans = seen[x] = !seen[x]);
        return ans;
    }
    
    const generateRowsStart = () => new Array(9).fill(false).map((_, index) => [index, 0]);
    const generateColsStart = () => new Array(9).fill(false).map((_, index) => [0, index]);
    const generateBoxesStart = () => new Array(9).fill(false).map((_, index) => [(index % 3) * 3, Math.floor(index / 3) * 3]);
    
    const generateRowsPoints = (start) => new Array(9).fill(false).map((_, index) => [start[0], start[1] + index]);    
    const generateColsPoints = (start) => new Array(9).fill(false).map((_, index) => [start[0] + index, start[1]]);    
    const generateBoxesPoints = (start) => new Array(9).fill(false).map((_, index) => [start[0] + (index % 3), start[1] +  Math.floor(index / 3)]);

    const v = (startFn, generateFn) => {
        let ans;
        startFn().every(x => ans = validatePoints(generateFn(x)));
        return ans;
    }

    return v(generateRowsStart, generateRowsPoints) && v(generateColsStart, generateColsPoints) && v(generateBoxesStart, generateBoxesPoints);    
};
