let altura = Number(prompt("Digite sua altura em metros"))
let Peso = Number(prompt("Digite seu peso em kg"))

let pesosaudavel = Peso / (altura * 2)

if (pesosaudavel > 18.5 && pesosaudavel < 24.9) {
    alert(pesosaudavel)
    alert("seu peso esta saudavel")
} else {
    alert(pesosaudavel)
    alert("vc ta gorda")
}