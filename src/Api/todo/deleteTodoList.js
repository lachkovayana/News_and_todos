import { instance } from "../API";

export const deleteToDoList = async (id) => {
    return await instance.delete("api/ToDoList", { data: { id: id } })
}