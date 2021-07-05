import { getSaludo } from "../../base-pruebas/02-template-string";
describe("Pruebas en 02-Template*String", () => {
  test("getSaludo debe retornar Hola Fernando", () => {
    const name = "fernando";
    const saludo = getSaludo(name);
    expect(saludo).toBe("Hola " + name);
  });

  //getSaludo debe retornar Hola Carlos si n hay argumentos

  test("Prueba funcion getSaludo Sin parametros", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Carlos");
  });
});
