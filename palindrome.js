//palindrome problem that checks pairs 2 make sure its actually a paindrome


var isPalindrome = function(x) {

    if (x < 0) return false  
    
    const arr = x.toString().split('')
    let left = 0
    let right = arr.length - 1
    
    while (left < right) {
        if (arr[left] !== arr[right]) {
            
            return false
        }
        left++
        right--
    }
    
    return true
}
