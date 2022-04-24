import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


export function BookmarkedScreen({}) {
    return(
        <View style={styles.container}>
            <Text>Bookmarked Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})