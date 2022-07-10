// Create a range function
// range(5) -> [1, 2, 3, 4, 5]
// range(6, 11) -> [6, 7, 8, 9, 10, 11]
// range(10, 19, 2) -> [10, 12, 14, 16, 18]
// range(6, 2) -> [6, 5, 4, 3, 2]
// range(8, -3, 4) -> [8, 4, 0]

//desafio 1
function range(end) {
    const list = []
    for(let i = 1; i <= end; i++) {
        list.push(i);
    }
    return list
}
console.log(range(5))

//desafio 2
function range(start, end) {
    const list = []
    for(let i = start; i <= end; i++) {
        list.push(i)
    }
    return list
}
console.log(range(6, 11))

//desafio 3
function range(start, end, jump) {
    const list = []
    for(let i = start; i < end; i += jump ) {
        list.push(i)
    }
    return list
}
console.log(range(10, 19, 2))

//desafio 4
function range(end, start) {
    const list = []
    for(let i = end; i >= start; i--) {
        list.push(i)
    }
    return list
}
console.log(range(6, 2))

//desafio 5
function range(start, end, jump) {
    const list = []
    for(let i = start; i >= end; i -= jump ) {
        list.push(i)
    }
    return list
}
console.log(range(8, -3, 4))

//------------------------------------------------------------

//uma única funçao para suportar todos desafios
function range(a, b, s = 1) {
    const n1 = b == undefined ? 1 : a
    const n2 = b == undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

    const nums = []
    for(let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        nums.push(i)
    }
    return nums
}
//desafio 1
console.log(range(5))
//desafio 2
console.log(range(6, 11))
//desafio 3
console.log(range(10, 19, 2))
//desafio 4
console.log(range(6, 2))
//desafio 5
console.log(range(8, -3, 4))