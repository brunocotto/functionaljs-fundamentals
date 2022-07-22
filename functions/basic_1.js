let a = 4
console.log(a)

//Function declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

//Function expreesion
const boaTarde = function () {
    console.log('Boa tarde!')
}

let x = boaTarde() //undefined

function somar(a = 0, b = 0) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3, 5, 6, 7, 8)
console.log(resultado)

//NaN, not a numer
resultado = somar(3)
console.log(resultado)

//após inserir os valores iniciais somar(a = 0, b = 0)
//função sem parâmetros retorna 0
resultado = somar()
console.log(resultado)