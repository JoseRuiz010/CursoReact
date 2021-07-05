const personajes = ["Goku", "Vegueta", "Trunks"];

const [p1] = personajes;

console.log(p1);

const useState = (valor) => {
  return [valor, () => console.log(valor)];
};

console.log(useState);
