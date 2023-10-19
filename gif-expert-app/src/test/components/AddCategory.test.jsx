import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Prueba en componente <AddCategory/ >', () => {
    test('Debe cambiar el valor de la caja de texto ', () => {
        render(<AddCategory onNewValue={() => { }} />)
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value: "Saitama" } })
        expect(input.value).toBe("Saitama");
        screen.debug();
    });
});