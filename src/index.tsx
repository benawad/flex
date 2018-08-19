import * as React from "react";
import { createSwitchNavigator } from "react-navigation";
import { Provider } from "unstated";
import { SafeAreaView } from "react-native";

import { PickStartingWeights } from "./screens/PickStartingWeights";
import { Initial } from "./screens/Initial";
import { AppStack } from "./stacks/AppStack";

const RootStack = createSwitchNavigator(
  {
    Initial,
    PickStartingWeights,
    AppStack
  },
  {
    initialRouteName: "Initial"
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <SafeAreaView />
        <RootStack />
      </Provider>
    );
  }
}
