// var nome = "Nathan";
// let sobreNome = "Torres";
// var nome = 'sad'

// console.log(nome);

// alert("Olá, Mundo")
// let nome = prompt('Olá, qual seu nome ?')
// alert(`olá, ${nome} !`)

let nota1, nota2, nota3, nota4

nota1 = prompt("qual o valor da 1 nota")
nota2 = prompt("qual o valor da 2 nota")
nota3 = prompt("qual o valor da 3 nota")
nota4 = prompt("qual o valor da 4 nota")
media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4
alert(`A media das notas é ${media}`)
if (media >= 7) {
    alert("aprovado, Parabéns !")
} else {
    alert("reprovado, estude mais um pouco")
}

