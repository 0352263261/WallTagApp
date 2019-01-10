import React, { Component } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation";
import DetailPost from "./src/app/views/screens/DetailPost";
import Location from "./src/app/views/screens/Location";
import Login from "./src/app/views/screens/Login";
import Register from "./src/app/views/screens/Register";
import Main from "./src/app/views/screens/Main";
import Authentication from "./src/app/views/screens/Authentication";
import Changeinfo from "./src/app/views/screens/ChangeInfo";
import NewFeed from "./src/app/views/screens/NewFeed";
import ResultSearch from "./src/app/views/screens/ResultSearch";
import Approve from "./src/app/views/screens/Approve";
import History from "./src/app/views/screens/History"

const MyStack = createStackNavigator({
  Login: {screen: Login},
  Register: {Register},
  Main: { screen: Main },
  Authentication: { screen: Authentication },
  Changeinfo: {screen: Changeinfo},
  History: {screen: History},
  Location: {screen: Location},
  DetailPost: {screen: DetailPost},
  NewFeed: {screen: NewFeed},
  Register: {screen: Register},
  ResultSearch: {screen: ResultSearch},
  Approve: {screen: Approve}
  
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default class App extends Component {
  componentDidMount(){
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <MyStack />
    );
  }
}

export {MyStack}