import {combineReducers, createStore} from "redux";
import {postReducer} from "./post/postReducer";


const rootReducer = combineReducers({
    post:postReducer
})

export const appStore = createStore(rootReducer)