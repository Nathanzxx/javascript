let valorOriginal = parseFloat(prompt("Informe o valor original do produto:"));
let codigoPromocional = prompt("Informe o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5):");
let codigoPromocional2 = codigoPromocional.toUpperCase()

let descontoAplicado;

switch (codigoPromocional2) {
    case 'DESC1':
        descontoAplicado = 0.05;
        break;
    case 'DESC2':
        descontoAplicado = 0.10;
        break;
    case 'DESC3':
        descontoAplicado = 0.15;
        break;
    case 'DESC4':
        descontoAplicado = 0.20;
        break;
    case 'DESC5':
        descontoAplicado = 0.25;
        break;
    default:
        alert("Erro: Código promocional inválido.");
        descontoAplicado = 0;
}

if (descontoAplicado !== undefined) {
    let valorComDesconto = valorOriginal - (valorOriginal * descontoAplicado);
    alert(`${descontoAplicado}% de desconto`);
    alert(`Valor original do produto: R$ ${valorOriginal}`);
    alert(`Valor com desconto: R$ ${valorComDesconto}`);
}
