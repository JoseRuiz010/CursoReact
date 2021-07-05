const persona = {
  nombre: "Toni",
  edad: 45,
  clave: "toni45",
};

// const { nombre, edad, clave } = persona;

// console.log(persona);
// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retorna = ({ edad, clave }) => {
  console.log(edad, clave);
};

retorna(persona);
