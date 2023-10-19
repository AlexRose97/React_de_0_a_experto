import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('Prueba en componente <AddCategory/ >', () => {
    test('Debe cambiar el valor de la caja de texto ', () => {
        render(<AddCategory onNewValue={() => { }} />)
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value: "Saitama" } })
        expect(input.value).toBe("Saitama");
        //screen.debug();
    });


    test('Debe llamar onNewValue si se ingresa un valor', () => {
        const inputValue = "Saitama";

        //renderizar la pagina
        render(<AddCategory onNewValue={() => { }} />);

        //obtener los componentes a manipular
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        //enviar valores
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        //la pagina al enviar el formulario reinicia el campo de busqueda
        expect(input.value).toBe("")
        //screen.debug()
    });
});