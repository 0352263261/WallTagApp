
import React, { Component } from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation";
import DetailPost from "./src/app/views/main/detailposter/DetailPost";
import Location from "./src/app/views/main/search/Location";
import Login from "./src/app/views/login/Login";
import Register from "./src/app/views/register/Register";
import Main from "./src/app/views/main/Main";
import Authentication from "./src/app/views/main/authentication/Authentication";
import Changeinfo from "./src/app/views/main/changeInfo/ChangeInfo";
import NewFeed from "./src/app/views/main/pager/NewFeed";
import ResultSearch from "./src/app/views/main/search/ResultSearch";
import Approve from "./src/app/views/main/approve/Approve";

const MyStack = createStackNavigator({
  Login: {screen: Login},
  Register: {Register},
  Main: { screen: Main },
  Authentication: { screen: Authentication },
  Changeinfo: {screen: Changeinfo},
  Location: {screen: Location},
  DetailPost: {screen: DetailPost},
  NewFeed: {screen: NewFeed},
  Login: {screen: Login},
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