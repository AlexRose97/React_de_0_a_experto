import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

//se realiza un mock(simulacion) de los hooks ya que no son parte de la prueba del componente
jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('pruebas en <MultipleCustomHooks/>', () => {
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        incremet: mockIncrement
    });

    //en todos los test se reinicia el estado al iniciar.
    beforeEach(()=>{
        jest.clearAllMocks();
    });

    test('debe mostrar el componente por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        render(<MultipleCustomHooks />);

        expect(screen.getByText("cargando...")).toBeTruthy();
        expect(screen.getByText("BreakingBad Quotes")).toBeTruthy();

        const nextButton = screen.getByRole("button", { name: "Mas Frases" });
        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: "alex", quote: "hola mundo" }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText("alex")).toBeTruthy();
        expect(screen.getByText("hola mundo")).toBeTruthy();

        const nexButton = screen.getByRole("button", { name: "Mas Frases" });
        expect(nexButton.disabled).toBeFalsy();
    });

    test('debe de llamar la funcion de incrementar', () => {
        useFetch.mockReturnValue({
            data: [{ author: "alex", quote: "hola mundo" }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        const nexButton = screen.getByRole("button", { name: "Mas Frases" });
        fireEvent.click(nexButton);

        expect(mockIncrement).toHaveBeenCalled();
    });

});