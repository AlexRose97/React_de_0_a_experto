import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  /*
  test("Debe hacer match con el snapshot", () => {
    const title = "Este es el titulo";
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
*/
  test("Debe mostrar titulo en H1", () => {
    const title = "Este es el titulo";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    //const h1 = container.querySelector("h1");
    //expect(h1.innerHTML).toContain(title);
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe mostrar el subtitulo mandado por props", () => {
    const title = "Este es el titulo";
    const subTitle = "Este es el subtitulo";
    const { container, getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2);

    //const h1 = container.querySelector("h1");
    //expect(h1.innerHTML).toContain(title);
    //expect(getByTestId("test-title").innerHTML).toContain(title);
  });
});
