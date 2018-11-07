
import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import DetailPost from "./src/components/Detail/DetailPost";
import Location from "./src/components/search/Location";

import Main from "./src/components/Main/Main";
import Authentication from "./src/components/Authentication/Authentication";
import History from "./src/components/History/History";
import Changeinfo from "./src/components/ChangeInfo/ChangeInfo";
import NewFeed from "./src/components/Main/NewFeed/NewFeed";

const MyStack = createStackNavigator({
  Location: {screen: Location},
  Main: { screen: Main },
  Authentication: { screen: Authentication },
  History: { screen: History },
  Changeinfo: {screen: Changeinfo},
  
  DetailPost: {screen: DetailPost},
  NewFeed: {screen: NewFeed}
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
