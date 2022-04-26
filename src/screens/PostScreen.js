import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


export function PostScreen({route}) {
    const post = route.params.post

    console.log(post)

    return(
        <View style={styles.container}>
            <Text>12</Text>
        </View>
    )
}

PostScreen.navigationOptions


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})