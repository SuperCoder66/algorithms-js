// https://leetcode.com/problems/valid-parentheses/
// https://leetcode.com/submissions/detail/549788987/ Faster then 99.6% of javascript submissions

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let stack = [];
    
    let pointer = 0;
    while (pointer < s.length) {
        let char = s[pointer];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(convert(char));
        } else {
            if (stack.pop() !== char) {
                return false;
            }
        }
        
        pointer++;
    }
    
    return stack.length === 0;
    
};

function convert(symbol) {
    if (symbol === '(') {
        return ')';
    }
    
    if (symbol === '[') {
        return ']';
    }
    
    if (symbol === '{') {
        return '}';
    }
    
    return 'Z';
}
