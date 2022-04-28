import React from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'
import {Post} from "../Post";


export function PostsList({data = [],open}) {

    if (!data.length){
        return <View style={styles.container}>
            <Text style={styles.text}>No posts yet</Text>
        </View>
    }

    return <View style={styles.container}>
            <FlatList data={data} keyExtractor={post => post.id.toString()}
                      renderItem={({item}) => <Post post={item} onOpen={open}/>}/>
        </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    text:{
        textAlign:'center'
    }
})