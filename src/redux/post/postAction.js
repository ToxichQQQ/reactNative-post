import {ADD_NEW_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from "../types";
import {DATA} from "../../data";

export const actionLoadPost = () => {
    return {type: LOAD_POSTS, payload: DATA}
}

export const actionToggleBooked = (id) => {
    return {type: TOGGLE_BOOKED, payload:id}
}

export const actionRemovePost = (id) =>{
    return {type:REMOVE_POST,payload:id}
}

export const actionAddNewPost = (post) => {
    post.id = Date.now().toString()

    return {
        type:ADD_NEW_POST,
        payload:post
    }
}