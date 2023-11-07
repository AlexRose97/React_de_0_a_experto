const initialState = [{
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
}];

const toDoReducer = (state = initialState, action = {}) => {

    if (action.type === "[TODO] add toDO") {
        return [...state, action.payload]
    }

    return state;
}



let toDos = toDoReducer();

const newTodo = {
    id: 2,
    todo: "recolectar la piedra del poder",
    done: false,
}

const addToDoAction = {
    type: "[TODO] add toDO",
    payload: newTodo,
}

toDos = toDoReducer(toDos, addToDoAction)

console.log({ state: toDos });