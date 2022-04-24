import * as Font from 'expo-font'

export async function bootstrap() {
 await Font.loadAsync({
     'mainFont-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
     'mainFont-regular': require('../assets/fonts/OpenSans-Regular.ttf')
 })
}