import { render, screen } from "@testing-library/react";
import { GifExperApp } from "../GifExperApp";

describe('test en el componente <GifExperApp/>', () => {
    test('debe renderizar el titulo de la pagina ', () => {
        render(<GifExperApp />)
        expect(screen.getByText("GifExpertApp")).toBeTruthy();
        screen.debug()
    });
});