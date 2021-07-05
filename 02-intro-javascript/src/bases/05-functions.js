const saludar = (nombre) => {
  return `Hola ${nombre}`;
};

console.log(saludar("Rocio"));
console.log(saludar());
const getUsuario = (nombre) => ({
  id: "ABC123",
  username: nombre,
});

const userActivo = getUsuario("Jose");

console.log(userActivo);
