const alunos = [
  {
    nome: "Luiz",
    idade: 19,
    nota: 8.5,
  },
  {
    nome: "João",
    idade: 17,
    nota: 6,
  },
  {
    nome: "Maria",
    idade: 20,
    nota: 9,
  },
  {
    nome: "Pedro",
    idade: 18,
    nota: 5,
  },
];
const alunosAprovados = alunos.filter((aluno) => aluno.nota >= 7);
const nomesAlunosAprovados = alunosAprovados.map((aluno) => aluno.nome);

console.log(nomesAlunosAprovados);
