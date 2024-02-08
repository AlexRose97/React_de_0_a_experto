import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";


const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}))

describe('Pruebas en <Navbar/>', () => {
    test('debe de mostrar el nombre del usuario', () => {
        const contextValue = {
            logged: true,
            user: { id: "ABC", name: "Alex" },
            logout: jest.fn(),
        }
        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect(screen.getByText(contextValue.user.name)).toBeTruthy();
    });

    test('debe de llamar el logout y navigate al hacer click en el boton', () => {
        const contextValue = {
            logged: true,
            user: { id: "ABC", name: "Alex" },
            logout: jest.fn(),
        }
        render(
            <MemoryRouter initialEntries={["/marvel"]}>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        const btLogout = screen.getByText("Logout");
        fireEvent.click(btLogout);
        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true})
    });
});