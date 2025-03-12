export const itens = [
  {
    id: 1,
    nome: "Arroz",
    quantidade: 0,
    unidade: "kg",
    categoria: "Grãos",
    dataValidade: "2021-12-31",
    dataCompra: "2021-01-01",
    preco: 4.5,
    marca: "Tio João",
  },
  {
    id: 2,
    nome: "Feijão",
    quantidade: 0,
    unidade: "kg",
    categoria: "Grãos",
    dataValidade: "2021-12-31",
    dataCompra: "2021-01-01",
    preco: 5.5,
    marca: "Camil",
  },
];

export const quantidadeTotal = itens.reduce(
  (total, item) => total + item.quantidade,
  0
);

const categorias = new Set(itens.map((item) => item.categoria));
export const categoriasDiferentes = categorias.size;
