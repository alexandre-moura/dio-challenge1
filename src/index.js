// Variáveis para armazenar o nome e a experiência do herói
const nome = prompt("Digite o nome do herói:");
const experiencia = parseInt(
  prompt("Digite a quantidade de experiência (XP) do herói:")
);

// Variável para armazenar o nível do herói
let nivel = "";

// Estrutura de decisão para classificar o nível baseado na experiência
if (experiencia < 1000) {
  nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
  nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
  nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
  nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
  nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
  nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
  nivel = "Imortal";
} else if (experiencia >= 10001) {
  nivel = "Radiante";
} else {
  nivel = "Desconhecido";
}

// Saída da mensagem com o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

// Função para calcular o saldo de Rankeadas e determinar o nível
function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  // Classificação do nível baseado na quantidade de vitórias
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
  } else {
    nivel = "Desconhecido";
  }

  // Retorna o saldo e o nível
  return { saldoVitorias, nivel };
}

// Solicitação de dados do jogador
const vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
const derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

// Chama a função e armazena o resultado
const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem final
console.log(
  `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
);
