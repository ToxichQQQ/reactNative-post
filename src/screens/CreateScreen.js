import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Button, TouchableWithoutFeedback, Image,Keyboard, TextInput} from 'react-native'
import {useDispatch} from "react-redux";
import {actionAddNewPost} from "../redux/post/postAction";


export function CreateScreen({navigation}) {
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

    const handleAddNewPost = () => {
        const post = {
            date: new Date().toJSON(),
            text,
            img,
            booked:false
        }
        dispatch(actionAddNewPost(post))
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <TextInput value={text} onChangeText={setText} placeholder='Type your text' multiline style={styles.input}/>
                    <Image style={styles.img}
                           source={{uri: img}}/>
                    <Button title='Create new post' onPress={() => {
                        navigation.navigate('Home')
                        handleAddNewPost()
                    }}/>
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