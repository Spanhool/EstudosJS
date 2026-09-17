const usuarios = [
  { id: 1, nome: "João" },
  { id: 2, nome: "Maria" },
  { id: 3, nome: "Carlos" },
  { id: 4, nome: "Ana" },
];

const encontrarUsuario = usuarios.find((usuario) => usuario.id === 3);

console.log(encontrarUsuario);
