import React, {useEffect} from 'react'
import {PostsList} from "../components/PostsList";
import {useDispatch, useSelector} from "react-redux";
import {actionLoadPost} from "../redux/post/postAction";


export function MainScreen({navigation}) {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.allPosts)


    const handleOpenPostScreen = (post) => {
        navigation.navigate('Post', {post})
    }

    useEffect(() => {
        dispatch(actionLoadPost())
    },[dispatch])

    return <PostsList data={posts} open={handleOpenPostScreen}/>
}