import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {Alert,View,StyleSheet,Button,Image} from 'react-native'

async function askForPermissions() {
    const {status} =  await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    )
    if (status !== 'granted'){
        Alert.alert('Error!')
        return  false
    }
    return true
}

export function PhotoPicker({onPick}) {
    const [image,setImage] = useState(null)

    const handleTakePhoto = async () =>{
            const hasPermissions = await askForPermissions()

        if (!hasPermissions){
            return
        }

       const img =  await ImagePicker.launchCameraAsync({
            quality:0.7,
            allowsEditing:false,
            aspect:[16,9]
        })

        setImage(img.uri)
        onPick(img.uri)

    }
    return <View style={styles.wrapper}>
        <Button title='Make photo' onPress={handleTakePhoto}/>
        {image && <Image style={styles.image} source={{uri:image}}/>}
    </View>
}


const styles = StyleSheet.create({
    wrapper:{
    marginBottom:10
    },
    image:{
        height:200,
        width:'100%',
        marginTop:10
    }
})
