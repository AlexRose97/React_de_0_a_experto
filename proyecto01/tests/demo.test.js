describe("Prueba Demo", () => {
  test("Esta prueba no debe fallar ", () => {
    const txt = "Hola mundo";
    const txt2 = txt;
    expect(txt).toBe(txt2);
  });
});
