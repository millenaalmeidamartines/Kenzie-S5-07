let votosA = 0;
let votosB = 0;
let votosC = 0;
let candidato = "";

while (candidato !== "x") {
    candidato = prompt("Digite o nome do candidato (A, B ou C) ou digite 'x' para encerrar a votação: ");
    if (candidato === "A") {
        votosA++;
        alert("Voto registrado com sucesso.");
    } else if (candidato === "B") {
        votosB++;
        alert("Voto registrado com sucesso.");
    } else if (candidato === "C") {
        votosC++;
        alert("Voto registrado com sucesso.");
    } else if (candidato !== "x") {
        alert("Candidato não encontrado.");
    }
}

alert(`Votos do Candidato A: ${votosA}\nVotos do Candidato B: ${votosB}\nVotos do Candidato C: ${votosC}`)

/*
alert("Votos do candidato A: " + votosA);
alert("Votos do candidato B: " + votosB);
alert("Votos do candidato C: " + votosC);
*/