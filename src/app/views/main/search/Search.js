import React from 'react';
import { createTabNavigator, createBottomTabNavigator, StackNavigator, TabNavigator } from "react-navigation";
import Location from "./Location";
import Template from "./Template";
import Posts from "../post/Posts";
import DetailPost from "../Detail/DetailPost";

const MyStack = StackNavigator({
    MyLocationScreen: { screen: Location },
    PostsScreen: { screen: Posts },
    DetailPost: {screen: DetailPost}
});

// Nesting Navigator: Navigator trong Navigator.
const MyTabNavigator = createBottomTabNavigator({
    Location: {screen: Location},
    TemplateScreen: {screen: Template }
},{
    tabBarPosition: 'bottom',
    tabBarOptions:{
        showIcon: true,
        showLabel: true,
        activeTintColor: 'red',
        activeBackgroundColor: 'white',
        inactiveTintColor: '#808080',
        inactiveBackgroundColor: 'white',
        labelStyle:{
            fontSize: 11,
            padding: 2
        },
    },
    swipeEnabled: true
});


export default class Search extends React.Component{
    render(){
        return(<MyTabNavigator/>)
    }
}