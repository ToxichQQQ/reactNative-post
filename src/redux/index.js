import {combineReducers, createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {postReducer} from "./post/postReducer";


const rootReducer = combineReducers({
    post:postReducer
})

export const appStore = createStore(rootReducer,applyMiddleware(thunk))