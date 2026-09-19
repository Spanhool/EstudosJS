const movimentacoes = [
  { tipo: "receita", descricao: "Salário", valor: 2500 },
  { tipo: "despesa", descricao: "Aluguel", valor: 900 },
  { tipo: "despesa", descricao: "Mercado", valor: 350 },
  { tipo: "receita", descricao: "Freelance", valor: 600 },
  { tipo: "despesa", descricao: "Internet", valor: 100 },
  { tipo: "despesa", descricao: "Academia", valor: 80 },
];

function gerarResumo(movimentacoes) {
  const receitas = movimentacoes.filter(
    (movimentacao) => movimentacao.tipo === "receita",
  );
  const totalReceitas = receitas.reduce(
    (total, movimentacao) => total + movimentacao.valor,
    0,
  );

  const despesas = movimentacoes.filter(
    (movimentacao) => movimentacao.tipo === "despesa",
  );
  const totalDespesas = despesas.reduce(
    (total, movimentacao) => total + movimentacao.valor,
    0,
  );

  const saldo = totalReceitas - totalDespesas;

  return {
    totalReceitas,
    totalDespesas,
    saldo,
  };
}

const resumo = gerarResumo(movimentacoes);

console.log(
  `Total Receitas: R$ ${resumo.totalReceitas} \nTotal Despesas: R$ ${resumo.totalDespesas} \nSaldo Atual: R$ ${resumo.saldo}`,
);
