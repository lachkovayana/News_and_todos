import { types } from "./types";

const initialState = {
    todo: []
}

const toDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TODOLIST:
            return {
                ...state,
                todo:
                    action.data,
            }

        //----or-----
        //let newState = {...state};
        //switch(action.type){
        // case GET_TODOLIST:
        //     newState.todo = action.todo;
        //     return newState;

        // case types.DELETE_TODOLIST:
        //     return {
        //         todo: [],
        //     }
        // case types.DELETE_TODO_ITEM:
        //     return {
        //         ...state,
        //         todo: [
        //             ...state.todo.filter(item => item.id !== action.ownerId)
        //         ]
        //     }
        default:
            return state;
    }
}

export default toDoReducer;