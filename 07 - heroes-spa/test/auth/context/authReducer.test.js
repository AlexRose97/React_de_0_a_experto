import { autReducer, types } from "../../../src/auth";


describe('Pruebas en authReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = autReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: { id: "ABC", name: "alex" }
        }
        const state = autReducer({}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        });
    });

    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        const state = {
            logged: true,
            user: { id: "ABc", name: "alex" }
        }

        const action = { type: types.logout };
        const newState = autReducer(state, action);
        expect(newState).toEqual({ logged: false });
    });
});