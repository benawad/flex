import * as React from "react";
import { Text, FlatList } from "react-native";
// tslint:disable-next-line:no-implicit-dependencies
import { Feather } from "@expo/vector-icons";
import { Subscribe } from "unstated";
import { LState } from "../states/LState";

export class LiftHistory extends React.PureComponent {
  static navigationOptions = {
    tabBarIcon: <Feather name="clipboard" size={20} />,
    tabBarLabel: "history"
  };

  render() {
    return (
      <Subscribe to={[LState]}>
        {(lState: LState) => (
          <FlatList
            data={Object.entries(lState.state.allLifts).sort(
              ([a], [b]) => (new Date(a) as any) - (new Date(b) as any)
            )}
            renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
            keyExtractor={x => x[0]}
          />
        )}
      </Subscribe>
    );
  }
}
