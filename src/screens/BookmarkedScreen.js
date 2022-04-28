import React, {useEffect} from 'react'
import {PostsList} from "../components/PostsList";
import {useDispatch, useSelector} from "react-redux";


export function BookmarkedScreen({navigation}) {
    const bookedPosts = useSelector(state => state.post.bookedPosts)


    const handleOpenPostScreen = (post) => {
        navigation.navigate('Post', {post})
    }

    return <PostsList data={bookedPosts} open={handleOpenPostScreen}/>
}

