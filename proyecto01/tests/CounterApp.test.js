import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("pruebas sobre <CounterApp/>", () => {
  const value = 10;
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar el valor inicial de 100", () => {
    render(<CounterApp value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(value + 1)).toBeTruthy();
  });

  test("Debe decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(value - 1)).toBeTruthy();
  });

  test("Debe de funcionar el boton de reset", () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(value + 3)).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "btn_reset" }));
    expect(screen.getByText(value)).toBeTruthy();

    ;
  });
});
