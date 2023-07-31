let soma = 0;
let media = 0
let quantidade = 0;
let numero = parseInt(prompt("Digite um número entre 0 e 10 para ser somado"));

while (numero >= 0 && numero <= 10) {
    soma += numero;
    quantidade++;
    numero = parseInt(prompt("Digite outro número entre 0 e dez para ser somado"));
}

if (quantidade > 0) {
    media = soma / quantidade;
} 
alert(`A soma dos números é ${soma} e a média é ${media}`)