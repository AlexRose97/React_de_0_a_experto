import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en useFetchGifs', () => {
    test('Debe regresar un estado inicial, sin imagenes y cargando true', () => {
        const { result } = renderHook(() => useFetchGifs("One Punch"));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe retornar un arreglo de imagenes y cargando Falso', async () => {
        const { result } = renderHook(() => useFetchGifs("One Punch2"));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
});