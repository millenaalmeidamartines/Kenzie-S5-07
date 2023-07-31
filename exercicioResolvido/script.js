let escolha = parseInt(prompt("Digite o código do produto ou digite 0 para sair"));
let quantidade = 0;
let valorTotalDoPedido = 0;

while (escolha != 0) {
    if (escolha == 101) {
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.20;
    } else if (escolha == 102) {
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.30;
    } else if (escolha == 103) {
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.50;
    } else if (escolha == 104) {
        quantidade = parseInt(prompt("Qual a quantidade deste item?"));
        valorTotalDoPedido += quantidade * 1.20;
    } else {
        alert('Produto Indisponível')
    }
    escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"));
}
alert(`O seu pedido ficou em R$${valorTotalDoPedido.toFixed(2)}`);