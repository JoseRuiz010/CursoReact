import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe("Pruebas 07-desestructuracion", () => {
  test("Debe retornar un strung y un numero", () => {
    const [letras, numero] = retornaArreglo();
    const arr = retornaArreglo(); //['ABC','123']
    expect(arr).toEqual(["ABC", 123]);
    expect(letras).toEqual("ABC");
    expect(typeof numero).toBe("number");
    expect(typeof letras).toBe("string");
  });
});
