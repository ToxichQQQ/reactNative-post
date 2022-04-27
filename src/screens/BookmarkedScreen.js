import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import {DATA} from "../data";
import {Post} from "../Post";


export function BookmarkedScreen({navigation}) {
    const handleOpenPostScreen = (post) => {
        navigation.navigate('Post',{post})
    }

    return(
        <View style={styles.container}>
            <FlatList data={DATA.find(post => post.booked)} keyExtractor={post => post.id.toString()}
                      renderItem={({item}) => <Post post={item} onOpen={handleOpenPostScreen}/>}
            />
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