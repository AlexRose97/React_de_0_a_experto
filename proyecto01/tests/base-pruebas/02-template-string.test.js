import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Prueba en 02-template-string", () => {
  test("getSaludodebe retornar Hola Alex", () => {
    const name = "alex";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
