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
        const onNewValue = jest.fn();//simular la funcion

        //renderizar la pagina
        render(<AddCategory onNewValue={onNewValue} />);

        //obtener los componentes a manipular
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        //enviar valores
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        //la pagina al enviar el formulario reinicia el campo de busqueda
        expect(input.value).toBe("")

        //evaluar la funcion que fue llamada
        expect(onNewValue).toHaveBeenCalled();
        expect(onNewValue).toHaveBeenCalledTimes(1);//llamada una vez
        expect(onNewValue).toHaveBeenCalledWith(inputValue);//llamada con el valor enviado

        //screen.debug()
    });

    test('no debe de llamar onNewValue si el input esta vacio', () => {
        const inputValue = "";
        const onNewValue = jest.fn();

        //renderizar
        render(<AddCategory onNewValue={onNewValue} />);

        //obtener valores
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        //no se debe haber llamado la funcion
        expect(onNewValue).toHaveBeenCalledTimes(0);
        expect(onNewValue).not.toHaveBeenCalled();



    });
});