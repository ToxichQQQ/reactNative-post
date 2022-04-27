import React from 'react'
import {HeaderButton} from "react-navigation-header-buttons";
import {Platform} from "react-native";
import {THEME} from "../theme";
import {Ionicons} from "@expo/vector-icons";

export function HeaderIcon(props){
    return <HeaderButton {...props} iconSize={24} IconComponent={Ionicons} color={Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff'}/>
}