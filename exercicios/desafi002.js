const movimentacoes = [
  { tipo: "receita", descricao: "Salário", valor: 2500 },
  { tipo: "despesa", descricao: "Aluguel", valor: 900 },
  { tipo: "despesa", descricao: "Mercado", valor: 350 },
  { tipo: "receita", descricao: "Freelance", valor: 600 },
  { tipo: "despesa", descricao: "Internet", valor: 100 },
  { tipo: "despesa", descricao: "Academia", valor: 80 },
];

const receitas = movimentacoes.filter(
  (movimentacao) => movimentacao.tipo === "receita",
);

const somaReceitas = receitas.reduce(
  (total, receita) => total + receita.valor,
  0,
);

const despesas = movimentacoes.filter(
  (movimentacao) => movimentacao.tipo === "despesa",
);
const totalDespesas = despesas.reduce(
  (total, despesa) => total + despesa.valor,
  0,
);

receitas.forEach((receita) => {
  console.log(`Receitas:
    ${receita.descricao} - R$ ${receita.valor.toFixed(2)}`);
});

despesas.forEach((despesa) => {
  console.log(`Despesas:
    ${despesa.descricao} - R$ ${despesa.valor.toFixed(2)}`);
});

console.log(`Total de despesas: R$ ${totalDespesas.toFixed(2)}`);

const saldoFinal = somaReceitas - totalDespesas;

console.log(`Saldo final: R$ ${saldoFinal.toFixed(2)}`);
