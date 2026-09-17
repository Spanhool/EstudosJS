const produtos = [
  { nome: "Mouse", preco: 100, estoque: 5 },
  { nome: "Teclado", preco: 250, estoque: 0 },
  { nome: "Monitor", preco: 1200, estoque: 3 },
  { nome: "Headset", preco: 300, estoque: 8 },
  { nome: "Webcam", preco: 450, estoque: 0 },
];

const produtosDisponiveis = produtos.filter((produto) => produto.estoque > 0);

produtosDisponiveis.forEach((produto) => {
  console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});
