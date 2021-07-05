const persona = {
  nombre: "jose",
  apellido: "Ruiz",
  edad: 45,
  direccion: {
    pais: "Argentina",
    Provincia: "Tucuman",
  },
};

console.log({
  persona,
});

const persona2 = { ...persona };
persona2.apellido = "starck";
console.log(persona2);
