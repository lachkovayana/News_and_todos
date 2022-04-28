import { instance } from "../API"

export const fetchNewsRequest = async () => {
   const res =  await instance.get('api/News');
   return res.data;
}