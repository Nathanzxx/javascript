let frase = "carro azul e vermelho"
let gato = "gato"

console.log(frase);
console.log(frase.charAt(0));
console.log(frase[1]);

console.log(frase.length);

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

console.log(gato.substring(1, 3));

let frasecortada = frase.split(" ");
console.log(frasecortada);
console.log(frasecortada[1]);

let fraseAlterada = frase.replace("carro" , "gato")
console.log(frase);
console.log(fraseAlterada);

