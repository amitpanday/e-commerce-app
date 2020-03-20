import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Home from './containers/home'


const AppNavigator = StackNavigator(
  {
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const App = () => (
  <Root>
    <AppNavigator />
  </Root>
)

export default App;