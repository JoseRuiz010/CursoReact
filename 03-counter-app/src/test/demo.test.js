describe("Pruebas en el archivo demo.test.ujs", () => {
  
    test("Debe ser iguales los String", () => {
    // inicializacion
    const mensaje = "Hola Mundo";
    //estimulo
    const mensaje2 = `Hola Mundo`;
    //Observar Comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
