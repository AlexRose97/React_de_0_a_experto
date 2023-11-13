import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('pruebas en el componente <TodoItem/>', () => {
    const todo = {
        id: 1,
        description: "piedra del alma",
        done: false,
    }
    const onDeleteTodo = jest.fn();
    const onToggleTodo = jest.fn();
    beforeEach(() => { jest.clearAllMocks() });

    test('debe mostrar el TODO pendiente de completar', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />);

        const liElement = screen.getByRole("listitem");
        expect(liElement.className).toBe("list-group-item d-flex justify-content-between");

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("align-self-center");
    });

    test('debe mostrar el TODO completado', () => {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />);
        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("text-decoration-line-through");
    });

    test('el span debe llamar el toggleTODO al hacer clic', () => {
        todo.done = true;

        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />);
        const spanElement = screen.getByLabelText("span");
        fireEvent.click(spanElement);
        expect(onToggleTodo).toHaveBeenCalledWith(todo.id);

    });

    test('debe de llamar el onDeleteTodo al hacer clic al botton', () => {
        render(
            <TodoItem
                todo={todo}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        );

        const btnElement = screen.getByRole("button");
        fireEvent.click(btnElement);
        expect(onDeleteTodo).toHaveBeenCalledWith(todo.id);
    });
});