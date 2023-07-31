let valor = parseInt(prompt("Digite um valor de 0 a 10"));

while (valor < 0 || valor > 10) {
    valor = parseInt(prompt("Número inválido! Digite um valor de 0 a 10."))
} 
alert(`O valor selecionado é ${valor}`)