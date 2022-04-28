import { instance } from "../API";

export const addToDoList = async (name) => {
    return await instance.post("api/ToDoList", { id: null, name: name })
}