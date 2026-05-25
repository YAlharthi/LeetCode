// 412. Fizzzzz Buzzzzzzzzz
//(pretty efficient way too)

var fizzBuzz = function(n) {
    const result = []
    for (let i = 1; i <= n; i++) {
        let str = ''
        if (i % 3 === 0) str += 'Fizz'
        if (i % 5 === 0) str += 'Buzz'
        result.push(str || String(i))
    }
    return result
};