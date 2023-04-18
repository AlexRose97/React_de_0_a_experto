import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe", () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("getHeroeById debe retornar si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy(); //null || undefine || false
  });
  test("getHeroesByOwner debe retornar solo heroes de DC", () => {
    const owner = "DC";
    const hero = getHeroesByOwner(owner);
    expect(hero.length).toBe(3);
    expect(hero).toHaveLength(3);
  });
  test("getHeroesByOwner debe retornar solo heroes de Marvel", () => {
    const owner = "Marvel";
    const hero = getHeroesByOwner(owner);
    expect(hero.length).toBe(2);
    expect(hero).toHaveLength(2);
  });
});
