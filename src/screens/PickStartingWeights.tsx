import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Subscribe } from "unstated";

import { Center } from "../components/Center";
import { LState } from "../states/LState";
import { LiftForm } from "../components/LiftForm";

export class PickStartingWeights extends React.PureComponent<
  NavigationScreenProps
> {
  render() {
    return (
      <Center>
        <Text style={{ fontSize: 40, paddingBottom: 10 }}>Current 5x5</Text>
        <Subscribe to={[LState]}>
          {(lState: LState) => (
            <LiftForm
              onSubmit={values => {
                lState.setCurrentLifts(values);
                this.props.navigation.navigate("AppStack");
              }}
            />
          )}
        </Subscribe>
      </Center>
    );
  }
}
