import * as React from "react";
import { Formik, Field } from "formik";
import { StyleSheet, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Subscribe } from "unstated";

import { Center } from "../components/Center";
import { TextInputField } from "../components/TextInputField";
import { LState } from "../states/LState";

interface FormValues {
  squat: string;
  bench: string;
  deadlift: string;
  row: string;
  overheadPress: string;
}

const styles = StyleSheet.create({
  field: {
    fontSize: 30
  }
});

export class PickStartingWeights extends React.PureComponent<
  NavigationScreenProps
> {
  render() {
    return (
      <Center>
        <Text style={{ fontSize: 40, paddingBottom: 10 }}>Current 5x5</Text>
        <Subscribe to={[LState]}>
          {(lState: LState) => (
            <Formik<{}, FormValues>
              initialValues={{
                bench: "",
                squat: "",
                deadlift: "",
                overheadPress: "",
                row: ""
              }}
              onSubmit={values => {
                lState.setCurrentLifts({
                  bench: parseInt(values.bench, 10),
                  squat: parseInt(values.squat, 10),
                  deadlift: parseInt(values.deadlift, 10),
                  overheadPress: parseInt(values.overheadPress, 10),
                  row: parseInt(values.row, 10)
                });
                this.props.navigation.navigate("AppStack");
              }}
            >
              {({ handleSubmit }) => (
                <React.Fragment>
                  {["bench", "squat", "deadlift", "overheadPress", "row"].map(
                    x => (
                      <Field
                        style={styles.field}
                        key={x}
                        name={x}
                        placeholder={x}
                        keyboardType="numeric"
                        component={TextInputField}
                      />
                    )
                  )}
                  <Button title="set weights" onPress={handleSubmit as any} />
                </React.Fragment>
              )}
            </Formik>
          )}
        </Subscribe>
      </Center>
    );
  }
}
