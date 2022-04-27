import React from 'react'
import {View,FlatList,StyleSheet} from 'react-native'
import {Post} from "../Post";


export function PostsList({data,open}) {
    return <View style={styles.container}>
            <FlatList data={data} keyExtractor={post => post.id.toString()}
                      renderItem={({item}) => <Post post={item} onOpen={open}/>}/>
        </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})