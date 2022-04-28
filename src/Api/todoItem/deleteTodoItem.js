import { instance } from "../API"

export const deleteTodoItem = async (ownerId, id) => {
    return await instance.delete('api/ToDoItem', {
        data: {
            id: id,
            ownerId: ownerId,
        }
    })
}
