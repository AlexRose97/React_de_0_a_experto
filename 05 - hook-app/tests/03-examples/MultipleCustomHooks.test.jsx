import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples";

describe('pruebas en <MultipleCustomHooks/>', () => {
    test('debe mostrar el componente por defecto', () => {
        render(<MultipleCustomHooks />);

        expect(screen.getByText("cargando...")).toBeTruthy();
        expect(screen.getByText("BreakingBad Quotes")).toBeTruthy();

        const nextButton = screen.getByRole("button",{name:"Mas Frases"});
        expect(nextButton.disabled).toBeTruthy();

        screen.debug()
    });
});