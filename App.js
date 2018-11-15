
import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import DetailPost from "./src/components/Detail/DetailPost";
import Location from "./src/components/search/Location";
import Login from "./src/components/login/Login";
import Register from "./src/components/register/Register";
import Main from "./src/components/Main/Main";
import Authentication from "./src/components/Authentication/Authentication";
import History from "./src/components/History/History";
import Changeinfo from "./src/components/ChangeInfo/ChangeInfo";
import NewFeed from "./src/components/Main/NewFeed/NewFeed";
import ResultSearch from "./src/components/search/ResultSearch";
import Contact from "./src/components/approve/Contact";

const MyStack = createStackNavigator({
  Login: {screen: Login},
  Register: {Register},
  Main: { screen: Main },
  Authentication: { screen: Authentication },
  History: { screen: History },
  Changeinfo: {screen: Changeinfo},
  Location: {screen: Location},
  DetailPost: {screen: DetailPost},
  NewFeed: {screen: NewFeed},
  Login: {screen: Login},
  Register: {screen: Register},
  ResultSearch: {screen: ResultSearch},
  Contact: {screen: Contact}
  
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default class App extends Component {
  render() {
    return (
      <MyStack />
    );
  }
}

export {MyStack}