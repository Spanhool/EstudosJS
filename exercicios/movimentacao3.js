const movimentacoes = [
  { tipo: "receita", descricao: "Salário", valor: 2500, categoria: "Trabalho" },
  { tipo: "despesa", descricao: "Aluguel", valor: 900, categoria: "Casa" },
  {
    tipo: "despesa",
    descricao: "Mercado",
    valor: 350,
    categoria: "Alimentação",
  },
  {
    tipo: "receita",
    descricao: "Freelance",
    valor: 600,
    categoria: "Trabalho",
  },
  {
    tipo: "despesa",
    descricao: "Internet",
    valor: 100,
    categoria: "Casa",
  },
  {
    tipo: "despesa",
    descricao: "Academia",
    valor: 80,
    categoria: "Saúde",
  },
];

const casa = movimentacoes.filter(
  (movimentacao) => movimentacao.categoria === "Casa",
);

const totalCasa = casa.reduce(
  (total, movimentacao) => total + movimentacao.valor,
  0,
);

console.log("Despesas da categoria Casa:");

casa.forEach((movimentacao) => {
  console.log(movimentacao.descricao + " - R$" + movimentacao.valor);
});

console.log("Total: R$" + totalCasa);
