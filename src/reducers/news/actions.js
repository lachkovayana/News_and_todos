import { fetchNewsRequest } from "../../Api/news/getNews";
import { likeNews } from "../../Api/news/likeNews";
import { types } from "./types";

export const fetchNewsActionCreator = (data) => ({
    type: types.GET_NEWS,
    data
})

export const newsInfo = () => async dispatch => {
    try {
        const res = await fetchNewsRequest();
        dispatch(fetchNewsActionCreator(res));
    } catch (error) {
        console.log(error, 'error fetching news');
    }
}

export const addLike = (id) => async dispatch => {
    try {
        await likeNews(id);
        dispatch(newsInfo());
    } catch (error) {
        console.log(error, 'error adding like');
    }
}