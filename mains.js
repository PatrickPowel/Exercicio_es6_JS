// Definindo um array de objetos de alunos com seus nomes e notas
const alunos = [
    { nome: "João", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 4 },
    { nome: "Lucas", nota: 6 },
    { nome: "Julia", nota: 9 }
];

// Função para retornar apenas os alunos com nota maior ou igual a 6
function filtrarAlunos(aprovacao) {
    return alunos.filter(aluno => aluno.nota >= aprovacao);
}

// Chamando a função e armazenando o resultado em uma variável
const alunosAprovados = filtrarAlunos(6);

// Exibindo os alunos aprovados
console.log("Alunos aprovados:");
alunosAprovados.forEach(aluno => console.log(`${aluno.nome}: ${aluno.nota}`));
