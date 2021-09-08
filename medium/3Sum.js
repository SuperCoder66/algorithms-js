// https://leetcode.com/problems/3sum/submissions/
// https://leetcode.com/submissions/detail/549777124/ Faster than 95.8% of Javascript Submission

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let answers = [];
    const LEN = nums.length;
    nums.sort((x, y) => x - y);
    
    for (let i=0; i<LEN-2; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        let j = i+1;
        
        let k = LEN - 1;
        
        // 2 Sum
        let target = -nums[i];
        
        while (j < k) {
            const sum = nums[j] + nums[k];

            if (sum === target) {

                answers.push([nums[i], nums[j], nums[k]]);
                
                j++;
                k--;
                
                while (j < k && nums[j] === nums[j-1]) {
                    j++;
                }
                
                while (j < k && nums[k] === nums[k+1]) {
                    k--;
                }
                
            } else if (sum < target) {
                j++;
            } else {
                k--;
            }
        }
    }
    
    return answers;
    
};
