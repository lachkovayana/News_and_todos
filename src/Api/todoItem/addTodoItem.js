import { instance } from "../API"

export const addTodoItem = async (name,description,priority,listId) => {
    return await instance.post('api/ToDoItem',{
        id:null,
        name:name,
        description:description,
        priority:priority,
        listId:listId,
    });
}
