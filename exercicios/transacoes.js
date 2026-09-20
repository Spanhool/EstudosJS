const transacoes = [
  { descricao: "Salário", tipo: "entrada", categoria: "Trabalho", valor: 3000 },
  {
    descricao: "Freelance",
    tipo: "entrada",
    categoria: "Trabalho",
    valor: 800,
  },
  { descricao: "Aluguel", tipo: "saida", categoria: "Casa", valor: 900 },
  { descricao: "Mercado", tipo: "saida", categoria: "Alimentação", valor: 400 },
  { descricao: "Internet", tipo: "saida", categoria: "Casa", valor: 120 },
  { descricao: "Academia", tipo: "saida", categoria: "Saúde", valor: 100 },
  { descricao: "Cinema", tipo: "saida", categoria: "Lazer", valor: 80 },
  {
    descricao: "Freelance extra",
    tipo: "entrada",
    categoria: "Trabalho",
    valor: 500,
  },
];

function gerarRelatorioCategoria(transacoes, categoria) {
  const selecionarCategoria = transacoes.filter(
    (transacao) => transacao.categoria === categoria,
  );

  const quantidadeCategoria = selecionarCategoria.length;

  const valorTotal = selecionarCategoria.reduce(
    (total, transacao) => total + transacao.valor,
    0,
  );

  const descricaoDasTrasacoes = selecionarCategoria.map(
    (transacao) => transacao.descricao,
  );

  return {
    selecionarCategoria: categoria,
    quantidadeCategoria,
    valorTotal,
    descricaoDasTrasacoes,
  };
}

const relatorio = gerarRelatorioCategoria(transacoes, "Casa");

console.log(
  `Categoria: ${relatorio.selecionarCategoria}\nQuantidade: ${relatorio.quantidadeCategoria}\nTotal: ${relatorio.valorTotal}\nDescricoes: ${relatorio.descricaoDasTrasacoes}`,
);
