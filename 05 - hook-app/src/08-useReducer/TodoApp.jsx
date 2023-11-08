import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodos } from '../hooks';

export const TodoApp = () => {
    const { handleDeleteTodo, handleNewTodo, handleToggleTodo, todos, pendingTodosCunt, todosCount } = useTodos();
    return (
        <>
            <h1>Todo APP ({todosCount}), <small>pendiente: {pendingTodosCunt}</small></h1>
            <hr />
            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className='col-5'>
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
