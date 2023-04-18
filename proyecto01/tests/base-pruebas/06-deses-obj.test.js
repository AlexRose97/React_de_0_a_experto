import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Test al archivo 06-deses-obj", () => {
  test("llamado a la funcion usContext  y retorna un objeto", () => {
    const clave = "alex123";
    const nombre = "alex";
    const edad = "12";

    const objresp = usContext({ clave, nombre, edad });

    expect(objresp).toStrictEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
