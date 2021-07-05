import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("05 Funciones", () => {
  test("Debe retornar un Objeto", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const userTest = getUser();
    expect(userTest).toEqual(user);
  });

  test("getUser debe retornar un objeto", () => {
    const user = {
      uid: "ABC567",
      username: "Jose010",
    };
    const userTest = getUsuarioActivo("Jose010");

    expect(user).toEqual(userTest);
  });
});
