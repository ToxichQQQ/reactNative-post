import React from 'react'
import {View,StyleSheet,Text,ImageBackground,TouchableOpacity} from 'react-native'


export function Post({post,onOpen}) {
    return <TouchableOpacity onPress={() => onOpen(post)}>
    <View style={styles.container}>
        <ImageBackground style={styles.background} source={{ uri: post.img }}>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
                </View>
        </ImageBackground>
    </View>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    container:{
        marginBottom:15,
        overflow:'hidden'
    },
    background:{
    width:'100%',
        height:200
    },
    textWrap:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        alignItems:'center',
        width:'100%'
    },
    title:{
        color:'#fff',
        fontFamily:'mainFont-regular'
    }
})