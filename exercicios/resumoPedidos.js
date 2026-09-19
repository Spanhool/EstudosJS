const pedidos = [
  {
    cliente: "Luiz",
    status: "entregue",
    valor: 250,
    itens: 3,
  },
  {
    cliente: "Maria",
    status: "pendente",
    valor: 180,
    itens: 2,
  },
  {
    cliente: "João",
    status: "entregue",
    valor: 450,
    itens: 5,
  },
  {
    cliente: "Ana",
    status: "cancelado",
    valor: 120,
    itens: 1,
  },
  {
    cliente: "Pedro",
    status: "entregue",
    valor: 300,
    itens: 4,
  },
  {
    cliente: "Carlos",
    status: "pendente",
    valor: 200,
    itens: 2,
  },
];

function gerarResumoPedidos(pedidos) {
  const totalPedidos = pedidos.length;

  const pedidosEntregue = pedidos.filter(
    (pedido) => pedido.status === "entregue",
  );

  const totalPedidosEntregues = pedidosEntregue.length;

  const valorTotalEntregue = pedidosEntregue.reduce(
    (total, pedido) => total + pedido.valor,
    0,
  );

  const totalItensEntregues = pedidosEntregue.reduce(
    (total, pedido) => total + pedido.itens,
    0,
  );

  const clientesEntregues = pedidosEntregue.map((pedido) => pedido.cliente);

  return {
    totalPedidos,
    totalPedidosEntregues,
    valorTotalEntregue,
    totalItensEntregues,
    clientesEntregues,
  };
}

const resumoPedidos = gerarResumoPedidos(pedidos);

console.log(
  `Total Pedidos: ${resumoPedidos.totalPedidos} \nPedidos Entregues: ${resumoPedidos.totalPedidosEntregues} \nValor Total Entregue: R$ ${resumoPedidos.valorTotalEntregue} \nTotal Itens Entregues: ${resumoPedidos.totalItensEntregues} \nClientes Entregues: ${resumoPedidos.clientesEntregues}`,
);

/*
{
  totalPedidos: 6, OK
  pedidosEntregues: 3, OK
  valorTotalEntregues: 1000, OK
  totalItensEntregues: 12, OK
  clientesEntregues: ["Luiz", "João", "Pedro"] OK
}
*/
