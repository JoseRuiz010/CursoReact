import heroes from "../data/heroes";

console.log(heroes);

const getHeroesByID = (idValue) => {
  return heroes.find((i) => i.id === idValue);
};

// console.log(getHeroesByID(1));

export { getHeroesByID };
