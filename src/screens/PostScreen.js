import React, {useCallback, useEffect} from 'react'
import {Alert,View,Text,StyleSheet,Image,Button,ScrollView} from 'react-native'
import {THEME} from "../theme";
import {useDispatch, useSelector} from "react-redux";
import {actionRemovePost, actionToggleBooked} from "../redux/post/postAction";


export function PostScreen({route,navigation}) {
    const post = route.params.post
    const dispatch = useDispatch()
    const booked = useSelector(state => state.post.bookedPosts.some(item => item.id === post.id ))



    const handleRemovePost = (id) => {
        Alert.alert(
            "Delete this Post",
            "Do you really want to delete this post?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: () => {
                        navigation.navigate('Home')
                        dispatch(actionRemovePost(post.id))
                    },
                    style:'destructive'
                }
            ],
            {cancelable: true}
        )
    }

    const toggleHandler = useCallback(() => {
        dispatch(actionToggleBooked(post))
    },[dispatch,post])


    useEffect(()=>{
        navigation.setParams({booked})
    },[booked])

    useEffect(() => {
        navigation.setParams({toggleHandler})
    },[toggleHandler])

    return(
        <ScrollView style={styles.container}>
            <Image source={{uri: post.img}} style={styles.img}/>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{post.text}</Text>
            </View>
            <Button title='Delete' color={THEME.DANGER_COLOR} onPress={() => handleRemovePost(post.id)}/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
        img:{
            height:200
    },
    textWrapper:{
            padding:10
    },
    text:{
    fontFamily:'mainFont-regular'
    }
})