import { types } from "./types";

const initialState = {
    news: []
}

const news = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_NEWS:
            return {
                ...state,
                news: action.data
            }
        default:
            return state;
    }
}

export default news;