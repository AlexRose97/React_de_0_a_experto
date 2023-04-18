import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  const title = "este es un titulo";
  const subTitle = "este es un subtitulo";

  test("debe hacer match cin ek snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el mensaje titulo", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe de mostrar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle)).toHaveLength(2);
  });
});
