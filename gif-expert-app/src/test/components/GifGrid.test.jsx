import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs")

describe('Evaluar componente <GifGrid/>', () => {
    const category = "One Punch"
    test('debe de mostrar el loading inicialmente ', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category} />);
        expect(screen.getByText("Cargando..."))
        expect(screen.getByText(category))
        //screen.debug()
    });

    test('debe mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {
        const gifs = [
            {
                id: "ABC",
                title: "Saitama",
                url: "https://localhost/saitama.jpg"
            },
            {
                id: "ADB",
                title: "GOKU",
                url: "https://localhost/goku.jpg"
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole("img").length).toBe(2);
        //screen.debug()
    });
});