
import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import DetailPost from "./src/components/Detail/DetailPost";
import Location from "./src/components/search/Location";

import Main from "./src/components/Main/Main";
import Authentication from "./src/components/Authentication/Authentication";
import History from "./src/components/History/History";
import Changeinfo from "./src/components/ChangeInfo/ChangeInfo";

const MyStack = createStackNavigator({
  Main: { screen: Main },
  Authentication: { screen: Authentication },
  History: { screen: History },
  Changeinfo: {screen: Changeinfo},
  Location: {screen: Location},
  DetailPost: {screen: DetailPost}
}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });

export default class App extends Component {
  render() {
    return (
      // <AppStackNaivgator />
      <MyStack />
    );
  }
}
