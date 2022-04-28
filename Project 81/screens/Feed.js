import React, {Component} from 'react';
import {Text,View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import CreateStory from "./screens/CreateStory";

export default class Feed extends Component {
    render(){
        return(
            <View
            style = {{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text>Feeds</Text>
                </View>
        )
    }
}
    