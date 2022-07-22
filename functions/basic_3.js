// arrow funtion

const felizNatal = () => console.log('Feliz Natal!')
felizNatal()

const saudacao = (nome) => `Fala ${nome}, blz?`
// 'Fala ' + nome + ', blz?'
console.log(saudacao('Maria'))

// se tiver corpo {}, precisa do return
const somar = (...nums) => {
 //   console.log(Array.isArray(nums))
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(somar(1, 10, 15, 22))

// funtion arrow dentro de retornando 
//uma funcion arrow de forma otimizada
const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))

//this
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [-55, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()