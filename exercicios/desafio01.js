const movimentacoes = [
  { tipo: "receita", descricao: "Salário", valor: 2500 },
  { tipo: "despesa", descricao: "Aluguel", valor: 900 },
  { tipo: "despesa", descricao: "Mercado", valor: 400 },
  { tipo: "receita", descricao: "Freelance", valor: 800 },
  { tipo: "despesa", descricao: "Internet", valor: 100 },
];

const receitas = movimentacoes.filter(
  (movimentacao) => movimentacao.tipo === "receita",
);

const somaReceitas = receitas.reduce(
  (total, receita) => total + receita.valor,
  0,
);

const sobra =
  somaReceitas -
  movimentacoes.reduce(
    (total, movimentacao) =>
      total + (movimentacao.tipo === "despesa" ? movimentacao.valor : 0),
    0,
  );

console.log(`Soma das receitas: R$ ${somaReceitas.toFixed(2)}`);
console.log(`Sobra após despesas: R$ ${sobra.toFixed(2)}`);
