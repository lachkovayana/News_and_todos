import { instance } from "../API"

export const getToDo = async () => {
    const res = await instance.get('api/ToDoList');
    return res.data;
} 


