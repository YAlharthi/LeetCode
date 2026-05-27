var isValid = function(s) {
    const stack = []
    
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else {
           
            console.log('closing:', char, 'stack:', stack)
            const last = stack.pop()
if (char === ')' && last !== '(') return false
if (char === ']' && last !== '[') return false
if (char === '}' && last !== '{') return false
        }
    }
    return stack.length === 0;
}

isValid("()[]{}")
console.log(isValid("()"))        
console.log(isValid("()[]{}"))    
console.log(isValid("(]"))        
console.log(isValid("([)]"))      
console.log(isValid("{[]}"))      