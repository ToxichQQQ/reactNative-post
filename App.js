import AppLoading from 'expo-app-loading'
import React, {useEffect, useState} from "react";
import {bootstrap} from "./src/bootstrap";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {MainScreen} from "./src/screens/MainScreen";
import {AboutScreen} from "./src/screens/AboutScreen";
import {BookmarkedScreen} from "./src/screens/BookmarkedScreen";
import {PostScreen} from "./src/screens/PostScreen";
import {CreateScreen} from "./src/screens/CreateScreen";
import {THEME} from "./src/theme";
import {HeaderIcon} from "./src/components/HeaderIcon";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import {Provider, useDispatch, useSelector} from "react-redux";
import {appStore} from "./src/redux";

export default function App({}) {
    const [isReady, setReady] = useState(false)

    if (!isReady) {
        return <AppLoading
            startAsync={bootstrap}
            onFinish={() => setReady(true)} onError={(e) => console.log(e)}/>
    }

    const titleStyles = {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    }

    const titleColor = Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR


    const NavStack = createStackNavigator()
    const TabStack = createBottomTabNavigator()

    const Tab = () => {
        return <TabStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <TabStack.Screen name='Main' component={MainScreen} options={{tabBarButton: () => null}}/>
            <TabStack.Screen name='Book' component={BookmarkedScreen}
                             options={{
                                 tabBarLabel: "Bookmark",
                                 headerTintColor: titleColor,
                                 tabBarIcon: ({color}) => <Ionicons color={color} name='ios-star' size={25}/>
                             }}/>
            <TabStack.Screen name='Posts' component={MainScreen} options={{
                tabBarLabel: "All",
                headerTintColor: titleColor,
                tabBarIcon: ({color}) => <Ionicons color={color} name='ios-albums' size={25}/>
            }}/>
        </TabStack.Navigator>
    }

    return <Provider store={appStore}>
    <NavigationContainer>
        <NavStack.Navigator>
            <NavStack.Screen name='Home' component={Tab} options={({navigation}) => ({
                title: "My blog", headerStyle: titleStyles, headerTintColor: titleColor,
                headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                    <Item title="search" iconName="ios-camera" onPress={() => navigation.navigate('Create')}/>
                </HeaderButtons>
            })}/>
            <NavStack.Screen name='About' component={AboutScreen}
                             options={{title: "About", headerStyle: titleStyles, headerTintColor: titleColor}}/>
            <NavStack.Screen name='Post' component={PostScreen} options={({route}) => ({
                title: `Post ${new Date(route.params.post.date).toLocaleDateString()}`,
                headerStyle: titleStyles,
                headerTintColor: titleColor,
                headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                    <Item title='book' iconName={route.params.booked ? 'ios-star' : 'ios-star-outline'}
                          onPress={route.params.toggleHandler}/>
                </HeaderButtons>
            })}/>
            <NavStack.Screen name='Create' component={CreateScreen}
                             options={{title: "Create Post", headerStyle: titleStyles, headerTintColor: titleColor}}/>
        </NavStack.Navigator>
    </NavigationContainer>
    </Provider>
        }
