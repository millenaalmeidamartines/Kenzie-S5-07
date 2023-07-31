const usuario = prompt('Digite o nome de usuário');
let senha = prompt('Digite a senha');

while (usuario === senha) {
    senha = prompt('Erro! A senha não pode ser igual ao nome de usuário. Digite a senha novamente');
}

alert('Senha correta!');