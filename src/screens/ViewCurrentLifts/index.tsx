import * as React from "react";
import { Subscribe } from "unstated";
import format from "date-fns/format";
import { ScrollView, Button, View, Text } from "react-native";
import isWednesday from "date-fns/is_wednesday";
import isFriday from "date-fns/is_friday";

import { LState } from "../../states/LState";
import { LiftRow } from "./LiftRow";
import {
  wedSquat,
  wedLift,
  fridayLift,
  mondayLift
} from "../../utils/createLiftAmounts";

export class ViewCurrentLifts extends React.PureComponent {
  render() {
    const today = new Date();
    const isWed = isWednesday(today);
    const isFrid = isFriday(today);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <Text>{format(today, "dddd, MMM Do")}</Text>
        </View>
        <Subscribe to={[LState]}>
          {(lState: LState) => {
            const liftsToday: Array<keyof LiftValues> = ["squat"];

            if (isWed) {
              liftsToday.push("overheadPress");
              liftsToday.push("deadlift");
            } else {
              liftsToday.push("bench");
              liftsToday.push("row");
            }

            return (
              <React.Fragment>
                <ScrollView>
                  {liftsToday.map((k, i) => {
                    const amount = lState.state.currentLifts[k];
                    let createLiftAmounts: (
                      amount: number
                    ) => number[] = mondayLift;

                    if (isFrid) {
                      createLiftAmounts = fridayLift;
                    } else if (isWed) {
                      createLiftAmounts = k === "squat" ? wedSquat : wedLift;
                    }

                    return (
                      <LiftRow
                        key={`${i}-lr`}
                        name={k}
                        amount={amount}
                        liftAmounts={createLiftAmounts(amount)}
                      />
                    );
                  })}
                </ScrollView>
                <Button
                  title="save entry"
                  onPress={() =>
                    lState.saveLiftsForToday(lState.state.currentLifts)
                  }
                />
              </React.Fragment>
            );
          }}
        </Subscribe>
      </View>
    );
  }
}
