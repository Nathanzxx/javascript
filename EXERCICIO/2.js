var numeroSorteado = Math.floor(Math.random() * 10);

while(true) {
    var numeroUsuario = prompt("Digite um número de 0 a 10:");
    if(numeroUsuario == numeroSorteado) {
        alert("Parabéns, você acertou!");
        break;
    } else {
        alert("Tente novamente");
    }
}