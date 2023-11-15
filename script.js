let numberOne = Number(prompt('Digite o primeiro número'))
let numberTwo = Number(prompt('Digite o segundo número'))

const sum = (numberOne + numberTwo).toFixed(2)
const sub = (numberOne - numberTwo).toFixed(2)
const multi = (numberOne * numberTwo).toFixed(2)
const div = (numberOne / numberTwo).toFixed(2)
const rest = (numberOne % numberTwo).toFixed(2)

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${multi}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${rest}`)

if(sum % 2 == 0) {
    alert(`A soma dos dois números é par: ${sum}.`)
} else {
    alert(`A soma dos dois números é ímpar: ${sum}.`)
}

if(numberOne == numberTwo) {
    alert(`Os números inseridos são iguais!`)
} else {
    alert(`Os números inseridos são diferentes!`)
}