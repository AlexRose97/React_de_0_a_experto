import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas sobre 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
      done();
    });
  });

  test("getHeroeByIdAsync debe obtener un error si no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toEqual(`No se pudo encontrar el héroe ${id}`);
      done();
    });
  });
});
