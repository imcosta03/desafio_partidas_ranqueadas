/*Desenvolvindo por Izabela Costa
Manaus, 14 de novembro de 2025*/

// Importa o módulo readline para capturar entrada do usuário no terminal
const readline = require("readline");

// Cria a interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que calcula o saldo e o nível do jogador
function calcularRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Iteração do usuário no terminal
rl.question("Digite a quantidade de vitórias: ", (vitorias) => {
    rl.question("Digite a quantidade de derrotas: ", (derrotas) => {
        // Converte para número
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        // Chama a função e mostra o resultado
        console.log(calcularRankeadas(vitorias, derrotas));

        // Fecha a interface
        rl.close();
    });
});
