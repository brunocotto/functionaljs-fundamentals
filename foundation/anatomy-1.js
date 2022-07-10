//function declaration

//Forma 1
function sayHello() {
    console.log('Hello!')
}

sayHello()

//Forma 2
function sayHelloTo(name) {
    console.log(`hello ${name}!`)
}

sayHelloTo('Mike')

//Forma 3
function returnHi() {
    return 'Hi!' 
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

//Forma 4
function returnHiTo(name) {
    return `Hi ${name}!`
}

console.log(returnHiTo('Jhon'))