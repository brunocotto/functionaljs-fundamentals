//anonymous function
(function (a, b, c) {
    return a + b + c
})

//function expression
const sum = function (a, b) {
    return a + b
}
// Possibilidade de atribuir resultado de uma função
//a uma variável ou uma constante
const result = sum(4,22)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5, 15))

let x = 3
console.log(x)

x = sum
console.log(x(11,55))