import React from 'react'
import {DATA} from "../data";
import {PostsList} from "../components/PostsList";


export function BookmarkedScreen({navigation}) {
    const handleOpenPostScreen = (post) => {
        navigation.navigate('Post', {post})
    }

    return <PostsList data={DATA.filter(post => post.booked)} open={handleOpenPostScreen}/>
}

