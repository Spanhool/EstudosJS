const funcionarios = [
  {
    id: 1,
    nome: "Luiz",
    departamento: "TI",
    salario: 4500,
    ativo: true,
  },
  {
    id: 2,
    nome: "Maria",
    departamento: "Financeiro",
    salario: 3800,
    ativo: true,
  },
  {
    id: 3,
    nome: "João",
    departamento: "TI",
    salario: 5200,
    ativo: false,
  },
  {
    id: 4,
    nome: "Ana",
    departamento: "RH",
    salario: 3500,
    ativo: true,
  },
  {
    id: 5,
    nome: "Pedro",
    departamento: "TI",
    salario: 4800,
    ativo: true,
  },
  {
    id: 6,
    nome: "Carlos",
    departamento: "Financeiro",
    salario: 4200,
    ativo: false,
  },
];

function gerarResumoFuncionarios(funcionarios) {
  const totalFuncionarios = funcionarios.length;

  const funcionariosAtivos = funcionarios.filter(
    (funcionario) => funcionario.ativo === true,
  );
  const totalFuncionariosAtivos = funcionariosAtivos.length;

  const salarioTotalAtivos = funcionariosAtivos.reduce(
    (total, funcionario) => total + funcionario.salario,
    0,
  );

  const funcionariosTIAtivos = funcionariosAtivos.filter(
    (funcionario) => funcionario.departamento === "TI",
  );

  const nomeTIAtivos = funcionariosTIAtivos.map(
    (funcionario) => funcionario.nome,
  );

  const funcionarioId3 = funcionarios.find(
    (funcionario) => funcionario.id === 3,
  );

  return {
    totalFuncionarios,
    totalFuncionariosAtivos,
    salarioTotalAtivos,
    nomeTIAtivos,
    funcionarioId3,
  };
}

const resumo = gerarResumoFuncionarios(funcionarios);

console.log(
  `Total funcionarios: ${resumo.totalFuncionarios}\nFuncionarios ativos: ${resumo.totalFuncionariosAtivos}\nSalario dos funcionarios ativos: R$ ${resumo.salarioTotalAtivos}\nFuncionários da TI ativos: ${resumo.nomeTIAtivos}\nFuncionario ID 3: ${JSON.stringify(resumo.funcionarioId3)}`,
);

/*
  {
  totalFuncionarios: 6,
  funcionariosAtivos: 4,
  salarioTotalAtivos: 15800,
  nomesTIAtivos: ["Luiz", "Pedro"],
  funcionarioId3: {
    id: 3,
    nome: "João",
    departamento: "TI",
    salario: 5200,
    ativo: false
  }
}
*/
