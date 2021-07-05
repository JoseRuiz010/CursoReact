import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("08-test", () => {
  test("heroes por Id", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const h = heroes.find((h) => h.id === id);
    expect(h).toEqual(heroe);
  });

  test("heroes por Id debe retornar undefine si el heroes n existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);
    const h = heroes.find((h) => h.id === id);
    expect(h).toBe(undefined);
  });

  test("heroes por DC", () => {
    const owner = "DC";
    const heroe = getHeroesByOwner(owner);
    const h = heroes.filter((h) => h.owner === owner);
    expect(h).toEqual(heroe);
  });

  test("heroes por Marel el lenght debe ser =2", () => {
    const owner = "Marvel";
    const heroe = getHeroesByOwner(owner);
    const h = heroes.filter((h) => h.owner === owner);
    expect(2).toBe(h.length);
  });
});
