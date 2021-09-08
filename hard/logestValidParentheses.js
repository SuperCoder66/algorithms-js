// https://leetcode.com/problems/longest-valid-parentheses/
// https://leetcode.com/submissions/detail/551367305/ Faster than 86% of javascript submissions

// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function(s) {
    
    let ans = 0;
    
    let open = 0;
    let close = 0;
    let stack = [];
    let preLength = new Array(s.length+1).fill(0);    

    const reset = () => {
        open = 0;
        close = 0;
        stack = [];
    }
    
    reset();
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            open++;
            stack.push(i);
        } else {
            close++;
            if (close > open) {
                reset();
            } else {
                // calculate valid length

                let idx, length;
                idx = stack.pop();

                length = preLength[idx] + i - idx + 1;
                preLength[i + 1] = length;

                ans = Math.max(ans, length);
            }
            
        }

    }
    
    return ans;
    
};
