import { getHeroesByID } from "./bases/08-Importaciones";

// const promesas = new Promise((res, req) => {
//   setTimeout(() => {
//     const heroe = getHeroesByID(2);
//     //console.log(heroe);
//     res(heroe);
//     // res("No se pudo encontrar");
//   }, 2000);
// });

// promesas
//   .then((heroe) => {
//     console.log("Heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHEroByIdAsync = (id) => {
  return new Promise((res, req) => {
    setTimeout(() => {
      const heroe = getHeroesByID(id);
      heroe ? res(heroe) : req("No se encontro al heroe");
    }, 2000);
  });
};

getHEroByIdAsync(5).then(console.log).catch(console.log);
