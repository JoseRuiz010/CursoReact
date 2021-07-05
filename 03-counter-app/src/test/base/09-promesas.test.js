import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe("09-Promesas", () => {
  test("Debe retornar un heroe Async", (done) => {
    const id = 1;
    const heroeAsync = getHeroeByIdAsync(id).then((h) => {
      expect(h).toBe(heroes[0]);
      done();
    });
  });
  test("Debe retornar error", (done) => {
    const id = 100;
    const heroeAsync = getHeroeByIdAsync(id).catch((h) => {
      expect(h).toBe("No se pudo encontrar el héroe");
      done();
    });
  });
});
