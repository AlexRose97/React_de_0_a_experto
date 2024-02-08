import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";



describe('Pruebas en <SearchPage/>', () => {
    test('Debe mostrar correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
        // screen.debug();
    });


    test('Debe de mostar a Batman y el Query', () => {
        render(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole("textbox");
        expect(input.value).toBe("batman");

        const img = screen.getByRole("img");
        expect(img.src).toContain("/assets/heroes/dc-batman.jpg")
    });
});