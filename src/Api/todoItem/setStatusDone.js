import { instance } from "../API"

export const setStatusDone = async (ownerId, id) => {
    return await instance.post('api/ToDoItem/check', {
        id: id,
        ownerId: ownerId,
    }
    )
}
