import * as Font from 'expo-font'
import {DB} from "./db";

export async function bootstrap() {
    try{
        await Font.loadAsync({
            'mainFont-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
            'mainFont-regular': require('../assets/fonts/OpenSans-Regular.ttf')
        })
        await DB.init()
        console.log('DataBase started')
    }catch (e) {
        console.log(e)
    }
}