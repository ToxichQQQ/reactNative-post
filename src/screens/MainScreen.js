import React, {useEffect} from 'react'
import {PostsList} from "../components/PostsList";
import {useDispatch, useSelector} from "react-redux";
import {actionLoadPost} from "../redux/post/postAction";
import {View,StyleSheet,ActivityIndicator} from "react-native";
import {THEME} from "../theme";

export function MainScreen({navigation}) {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.post.allPosts)
    const loading = useSelector(state => state.post.loading)

    const handleOpenPostScreen = (post) => {
        navigation.navigate('Post', {post})
    }

    useEffect(() => {
        dispatch(actionLoadPost())
    },[dispatch])

    if (loading){
        return <View style={styles.center}>
            <ActivityIndicator color={THEME.MAIN_COLOR}/>
        </View>
    }

    return <PostsList data={posts} open={handleOpenPostScreen}/>
}


const styles = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})