import * as React from "react";
import { Subscribe } from "unstated";
import { Text, Button, AsyncStorage } from "react-native";

import { Center } from "../components/Center";
import { LState } from "../states/LState";
import { LSTATE_KEY } from "../contants";

export class ViewCurrentLifts extends React.PureComponent {
  render() {
    return (
      <Center>
        <Subscribe to={[LState]}>
          {(lState: LState) => (
            <Text>{JSON.stringify(lState.state.allLifts)}</Text>
          )}
        </Subscribe>
        <Button
          title="clear"
          onPress={() => {
            AsyncStorage.setItem(LSTATE_KEY, "");
          }}
        />
      </Center>
    );
  }
}
