import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import React, {useState} from "react";
import {bootstrap} from "./src/bootstrap";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {MainScreen} from "./src/screens/MainScreen";
import {AboutScreen} from "./src/screens/AboutScreen";
import {BookmarkedScreen} from "./src/screens/BookmarkedScreen";
import {PostScreen} from "./src/screens/PostScreen";
import {CreateScreen} from "./src/screens/CreateScreen";


export default function App() {
  const [isReady, setReady] = useState(false)

  if (!isReady){
    return <AppLoading
        startAsync={bootstrap}
        onFinish={() => setReady(true)} onError={(e) => console.log(e)}/>
  }

  const NavStack = createStackNavigator()


  return <NavigationContainer>
    <NavStack.Navigator>
      <NavStack.Screen name='Main' component={MainScreen}/>
      <NavStack.Screen name='About' component={AboutScreen}/>
      <NavStack.Screen name='Book' component={BookmarkedScreen}/>
      <NavStack.Screen name='Post' component={PostScreen}/>
      <NavStack.Screen name='Create' component={CreateScreen}/>
    </NavStack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
