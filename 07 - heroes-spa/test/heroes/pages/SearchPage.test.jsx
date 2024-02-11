import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <SearchPage/>', () => {
    beforeEach(() => jest.clearAllMocks());


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


    test('debe de mostrar un error si no se encuentra el heroe', () => {
        render(
            <MemoryRouter initialEntries={["/search?q=batman2"]}>
                <SearchPage />
            </MemoryRouter>
        )

        const alert = screen.getByLabelText("alert-danger");
        expect(alert.style.display).toBe('')
    });


    test('debe de llamar el navigate a la siguiente  pagina', () => {
        const inputValue = 'superman'
        render(
            <MemoryRouter initialEntries={["/search?"]}>
                <SearchPage />
            </MemoryRouter>
        )

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { name: "searchText", value: inputValue } })

        const form = screen.getByRole("form");
        fireEvent.submit(form);


        expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);
    });
});