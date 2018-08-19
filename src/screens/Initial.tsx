import * as React from "react";
import { Subscribe } from "unstated";
import { AsyncStorage } from "react-native";
import { NavigationScreenProps } from "react-navigation";

import { LState } from "../states/LState";
import { LifeCycle } from "../components/LifeCycle";
import { LSTATE_KEY } from "../contants";

export class Initial extends React.PureComponent<NavigationScreenProps> {
  render() {
    return (
      <Subscribe to={[LState]}>
        {(lState: LState) => (
          <LifeCycle
            didMount={async () => {
              let state: any;
              try {
                state = JSON.parse(await AsyncStorage.getItem(LSTATE_KEY));
                // tslint:disable-next-line:no-empty
              } catch (err) {}

              if (state && Object.keys(state).length) {
                lState.setState(state);
                this.props.navigation.navigate("AppStack");
              } else {
                this.props.navigation.navigate("PickStartingWeights");
              }
            }}
          />
        )}
      </Subscribe>
    );
  }
}
