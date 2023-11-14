import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

jest.mock("../../src/09-useContext/context/UserContext")

describe('pruebas en <LoginPage/>', () => {

    test('se debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText("pre");
        expect(preTag.innerHTML).toBe("null")
        // screen.debug();
    });

    test('se debe llamar el setUser al hacer click en el boton', () => {
        const setUser = jest.fn()
        render(
            <UserContext.Provider value={{ user: null, setUser }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(setUser).toHaveBeenCalledWith({"email": "correo@correo.com", "id": 123, "name": "juan"});
    });
});