import { types } from "../../../src/auth";

describe('Pruebas en "Types.js"', () => {
    test('debe de regresar los types siguientes: ', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: "[Auth] Logout",
        })
    });
});