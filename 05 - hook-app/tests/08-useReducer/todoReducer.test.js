import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo TODO',
        done: false,
    }]

    test('debe regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe agregar un TODO', () => {
        const action = {
            type: '[TODO] add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false,
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe de eliminar un TODO', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('debe de realizar la actualizacion de DONE en el TODO "Toggle"', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();

        const newState2 = todoReducer(newState, action);
        expect(newState2[0].done).toBeFalsy();
    });

});