import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en el componente <MainApp/>', () => {
    test('debe de mostrar el componente HomePage', () => {
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText("HomePage")).toBeTruthy();
    });

    test('debe mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={["/login"]}>
                <MainApp />
            </MemoryRouter>
        );

        expect(screen.getByText("LoginPage")).toBeTruthy();
    });
});