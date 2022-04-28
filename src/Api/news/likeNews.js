import { instance } from "../API"

export const likeNews = async (id) => {
   return await instance.post('api/News/like', { id });
}