import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/ui/components";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth/context";

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
        screen.debug()
    });
});