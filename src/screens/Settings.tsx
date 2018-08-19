import * as React from "react";
// tslint:disable-next-line:no-implicit-dependencies
import { Feather } from "@expo/vector-icons";
import { Center } from "../components/Center";
import { Subscribe } from "unstated";
import { LState } from "../states/LState";
import { LiftForm } from "../components/LiftForm";

export class Settings extends React.PureComponent {
  static navigationOptions = {
    tabBarIcon: <Feather name="settings" size={20} />,
    tabBarLabel: "settings"
  };

  render() {
    return (
      <Center>
        <Subscribe to={[LState]}>
          {(lState: LState) => {
            const iv: any = {};

            Object.entries(lState.state.currentLifts).forEach(([k, v]) => {
              iv[k] = `${v}`;
            });

            return (
              <LiftForm
                initialValues={iv}
                onSubmit={values => {
                  lState.setCurrentLifts(values);
                }}
              />
            );
          }}
        </Subscribe>
      </Center>
    );
  }
}
