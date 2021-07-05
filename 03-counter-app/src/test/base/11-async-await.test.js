import { getImagen } from "../../base-pruebas/11-async-await";

describe("Pruebas con Aync await y Fetch", () => {
  test("Debe retornar el URL", async () => {
    const url = await getImagen();
    console.log(typeof url);
    expect(url.includes("https://")).toBe("string");
  });
});
