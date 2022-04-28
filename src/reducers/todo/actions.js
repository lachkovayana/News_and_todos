import { addToDoList } from "../../Api/todo/addToDoList";
import { deleteToDoList } from "../../Api/todo/deleteTodoList";
import { getToDo } from "../../Api/todo/getToDo";
import { types } from "./types";
import { addTodoItem } from "../../Api/todoItem/addTodoItem";
import { deleteTodoItem } from "../../Api/todoItem/deleteTodoItem";
import { setStatusDone } from "../../Api/todoItem/setStatusDone";

//two action creators
export const fetchToDoList = (data) => ({
    type: types.GET_TODOLIST,
    data
})

export function loadTODOThunkCreator() {
    return (dispatch) => {
        getToDo()
            .then(data => {
                dispatch(fetchToDoList(data));
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export function checkTodoElementThunkCreator(id, ownerId) {
    return (dispatch) => {
        setStatusDone(id, ownerId)
            .then(() => {
                dispatch(loadTODOThunkCreator());
            })
            .catch(error => {
                console.log(error)
            });
    }
}

export function createTodoListThunkCreator(name) {
    return (dispatch) => {
        addToDoList(name)
            .then(() => {
                dispatch(loadTODOThunkCreator());
            })
    }
}

export function deleteTodoListThunkCreator(id) {
    return (dispatch) => {
        deleteToDoList(id)
            .then(() => {
                dispatch(loadTODOThunkCreator());
            })
    }
}

export function createTodoElementThunkCreator(name, description, priority, listId, isDone) {
    return (dispatch) => {
        addTodoItem(
            name,
            description,
            priority,
            listId
        )
            .then(() => {
                dispatch(loadTODOThunkCreator());
            })
    }
}

export function deleteTodoElementThunkCreator(ownerId, id) {
    return (dispatch) => {
        deleteTodoItem(ownerId, id)
            .then(() => {
                dispatch(loadTODOThunkCreator());
            })
    }
}



// export const toDoInfo = () => async dispatch => {
//     try {
//         const res = await getToDo();
//         dispatch(fetchToDoList(res))
//     } catch (error) {
//         console.log(error, 'error fetching todos');
//     }
// }

//new Thunk Creator





// export const addTODOList = (name) => async dispatch => {
//     try {
//         await addToDoList(name);
//         dispatch(toDoInfo());
//     } catch (error) {
//         console.log(error, 'error adding todo list');
//     }
// }

// export const deleteTODOList = (id) => async dispatch => {
//     try {
//         await deleteToDoList(id);
//         dispatch(toDoInfo());
//     } catch (error) {
//         console.log(error, 'error deliting todo list');
//     }
// }

// export const addTODOItem = (name, description, priority, listId) => async dispatch => {
//     try {
//         await addTodoItem(name, description, priority, listId);
//         dispatch(toDoInfo());
//     } catch (error) {
//         console.log(error, 'error adding todo item');
//     }
// }

// export const deleteTODOItem = (owenerId, id) => async dispatch => {
//     try {
//         console.log(owenerId, id);
//         await deleteTodoItem(owenerId, id);
//         dispatch(toDoInfo());
//     } catch (error) {
//         console.log(error, 'error deleting todo item');
//     }
// }

// export const setStatusDONE = (owenerId, id) => async dispatch => {
//     try {
//         console.log(owenerId, id);
//         await setStatusDone(owenerId, id);
//         dispatch(toDoInfo());
//     } catch (error) {
//         console.log(error, 'error setting status of todo item');
//     }
// }