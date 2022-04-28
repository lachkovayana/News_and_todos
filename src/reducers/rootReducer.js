
import { combineReducers } from "redux"
import news  from "../reducers/news/reducer";
import  toDoReducer  from "../reducers/todo/reducer";

export const rootReducer = combineReducers({
  newsPage: news,
  todo: toDoReducer
})
