import React, {useRef, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Button, TouchableWithoutFeedback, Image,Keyboard, TextInput} from 'react-native'
import {useDispatch} from "react-redux";
import {actionAddNewPost} from "../redux/post/postAction";
import {PhotoPicker} from "../components/PhotoPicker";


export function CreateScreen({navigation}) {
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const imgRef = useRef()


    const handleAddNewPost = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img: imgRef.current,
            booked:false
        }
        dispatch(actionAddNewPost(post))
    }

    const handlePickImage = (uri) => {
        imgRef.current = uri
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <TextInput value={text} onChangeText={setText} placeholder='Type your text' multiline style={styles.input}/>
                   <PhotoPicker onPick={handlePickImage}/>
                    <Button title='Create new post' onPress={() => {
                        navigation.navigate('Home')
                        handleAddNewPost()
                    }}
                    disable={!text}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    },
    input:{
        width: '100%',
        padding:5,
        marginTop:10,
      borderColor:'grey',
      borderWidth:1
    },
    img:{
        marginVertical:20,
        width:'100%',
        height:200
    }
})