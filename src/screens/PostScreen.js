import React from 'react'
import {Alert,View,Text,StyleSheet,Image,Button,ScrollView} from 'react-native'
import {THEME} from "../theme";


export function PostScreen({route}) {
    const post = route.params.post

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
                    onPress: () => console.log('Delete'),
                    style:'destructive'
                }
            ],
            {cancelable: true}
        )
    }

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