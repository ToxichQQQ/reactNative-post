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
import {THEME} from "./src/theme";


export default function App() {
  const [isReady, setReady] = useState(false)

  if (!isReady){
    return <AppLoading
        startAsync={bootstrap}
        onFinish={() => setReady(true)} onError={(e) => console.log(e)}/>
  }

  const titleStyles = {
      backgroundColor:  Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    }

    const titleColor = Platform.OS === 'android' ?  '#fff' : THEME.MAIN_COLOR


  const NavStack = createStackNavigator()


  return <NavigationContainer>
    <NavStack.Navigator>
      <NavStack.Screen name='Main' component={MainScreen} options={{title:"My blog",headerStyle:titleStyles,headerTintColor:titleColor}}/>
      <NavStack.Screen name='About' component={AboutScreen} options={{title:"About",headerStyle:titleStyles,headerTintColor:titleColor}}/>
      <NavStack.Screen name='Book' component={BookmarkedScreen} options={{title:"Bookmark",headerStyle:titleStyles,headerTintColor:titleColor}}/>
      <NavStack.Screen name='Post' component={PostScreen} options={({route}) => ({title: `Post ${new Date(route.params.post.date).toLocaleDateString()}`,headerStyle:titleStyles,headerTintColor:titleColor})}/>
      <NavStack.Screen name='Create' component={CreateScreen} options={{title:"Create new post",headerStyle:titleStyles,headerTintColor:titleColor}}/>
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
