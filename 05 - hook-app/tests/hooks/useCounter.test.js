import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe('Pruebas en el useCounter', () => {
    test('debe retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, incremet, reset } = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(incremet).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('debe generar el counter con el valor de 100', () => {
        const intialV = 10;
        const { result } = renderHook(() => useCounter(intialV));

        const { counter } = result.current;
        expect(counter).toBe(intialV);

    });

    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { incremet } = result.current;

        act(() => {
            incremet();
            incremet(2);
        })

        expect(result.current.counter).toBe(13);


    });

    test('debe de decrementar el el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement(2);
        })

        expect(result.current.counter).toBe(7);
    });

    test('debe de restablecer el valor predefinido', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, reset } = result.current;

        act(() => {
            decrement();
            decrement(2);
            reset();
        })

        expect(result.current.counter).toBe(10);
    });


});