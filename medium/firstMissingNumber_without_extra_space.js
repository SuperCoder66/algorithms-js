// https://leetcode.com/problems/first-missing-positive/submissions/
// Find first missing positive number in O(n) time and O(1) extra space

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {

    let startIndex = shiftNegativeAndZero(nums);
    let LEN = nums.length + 1 - startIndex;
    
    for(let x = startIndex; x < nums.length; x++) {
        let val = Math.abs(nums[x]);
        if (val>= LEN) {
            continue;
        }
        nums[startIndex + val-1] = -Math.abs(nums[startIndex + val-1]);
    }
    
    for (let i=startIndex; i<nums.length; i++) {
        if (nums[i] > 0) {
            return i + 1 - startIndex;
        }
    }
    
    return LEN;
};

function shiftNegativeAndZero(arr) {

    function swap(i, j) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    let x = 0;
    while(x < arr.length && arr[x] <= 0) {
        arr[x] = -1;
        x++;
    }
    if (x===arr.length) {
        return x;
    }

    let pointer2 = x+1;

    while(pointer2 < arr.length) {
        if (arr[pointer2] <= 0) {
            swap(x, pointer2);
            x++;
        } else if (arr[pointer2] > 10e5) {
            arr[pointer2] = arr[x];
            arr[x] = -1;
            x++;
        }
        pointer2++;
    }

    return x;
}
