import {ADD_NEW_POST, LOAD_POSTS, REMOVE_POST, TOGGLE_BOOKED} from "../types";
import {DB} from "../../db";
import * as FileSystem from 'expo-file-system';


export const actionLoadPost = () => {
    return async (dispatch) => {
        const posts = await DB.getPosts()
        return dispatch({type: LOAD_POSTS, payload: posts})
    }
}

export const actionToggleBooked = (post) => async dispatch => {
    await  DB.updatePost(post)

    dispatch({type: TOGGLE_BOOKED, payload: post.id})
}

export const actionRemovePost = (id) => async dispatch => {
    await DB.deletePost(id)

        dispatch({type: REMOVE_POST, payload: id})
}

export const actionAddNewPost = (post) => async dispatch => {
    const fileName = post.img.split('/').pop()
    const newPath = FileSystem.documentDirectory + fileName

    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (e) {
        console.log(e)
    }

    const payload = {
        ...post,img:newPath
    }

    const id = await  DB.createPost(payload)

    payload.id = id

    dispatch({type: ADD_NEW_POST, payload})
}