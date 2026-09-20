const vendas = [
  {
    vendedor: "Luiz",
    regiao: "Sul",
    status: "concluida",
    valor: 1200,
    produtos: 3,
  },
  {
    vendedor: "Maria",
    regiao: "Sudeste",
    status: "concluida",
    valor: 800,
    produtos: 2,
  },
  {
    vendedor: "João",
    regiao: "Sul",
    status: "cancelada",
    valor: 500,
    produtos: 1,
  },
  {
    vendedor: "Ana",
    regiao: "Sul",
    status: "concluida",
    valor: 1500,
    produtos: 5,
  },
  {
    vendedor: "Pedro",
    regiao: "Sudeste",
    status: "pendente",
    valor: 700,
    produtos: 2,
  },
  {
    vendedor: "Carlos",
    regiao: "Sul",
    status: "concluida",
    valor: 900,
    produtos: 4,
  },
];

function gerarResumoVendas(vendas) {
  const totalVendas = vendas.length;

  const filtrarVendasConcluidas = vendas.filter(
    (venda) => venda.status === "concluida",
  );

  const vendasConcluidas = filtrarVendasConcluidas.length;

  const faturamento = filtrarVendasConcluidas.reduce(
    (total, venda) => total + venda.valor,
    0,
  );

  const produtosVendidos = filtrarVendasConcluidas.reduce(
    (total, venda) => total + venda.produtos,
    0,
  );

  const vendedores = filtrarVendasConcluidas.map((venda) => venda.vendedor);

  return {
    totalVendas,
    vendasConcluidas,
    faturamento,
    produtosVendidos,
    vendedores,
  };
}

const resumo = gerarResumoVendas(vendas);

console.log(
  `Total de vendas: ${resumo.totalVendas}\nVendas Concluidas: ${resumo.vendasConcluidas}\nFaturamento: R$ ${resumo.faturamento}\nProdutos Vendidos: ${resumo.produtosVendidos}\nVendedores: ${resumo.vendedores}`,
);
/*
  {
  totalVendas: 6,
  vendasConcluidas: 4,
  faturamento: 4400,
  produtosVendidos: 14,
  vendedores: ["Luiz", "Maria", "Ana", "Carlos"]
}
*/
