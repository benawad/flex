import * as React from "react";
import { Formik, Field } from "formik";
import { StyleSheet, Button, View, Text } from "react-native";

import { LiftValues } from "../types/LiftValues";
import { TextInputField } from "./TextInputField";

interface Props {
  initialValues?: FormValues;
  onSubmit: (values: LiftValues) => void;
}

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

export class LiftForm extends React.PureComponent<Props> {
  render() {
    const {
      initialValues = {
        bench: "",
        squat: "",
        deadlift: "",
        overheadPress: "",
        row: ""
      },
      onSubmit
    } = this.props;
    return (
      <Formik<{}, FormValues>
        initialValues={initialValues}
        onSubmit={values => {
          onSubmit({
            bench: parseInt(values.bench, 10),
            squat: parseInt(values.squat, 10),
            deadlift: parseInt(values.deadlift, 10),
            overheadPress: parseInt(values.overheadPress, 10),
            row: parseInt(values.row, 10)
          });
        }}
      >
        {({ handleSubmit }) => (
          <React.Fragment>
            {["squat", "bench", "overheadPress", "row", "deadlift"].map(x => (
              <View key={x} style={{ alignItems: "center", paddingBottom: 20 }}>
                <Text>{x}:</Text>
                <Field
                  style={styles.field}
                  name={x}
                  placeholder={x}
                  keyboardType="numeric"
                  component={TextInputField}
                />
              </View>
            ))}
            <Button title="set weights" onPress={handleSubmit as any} />
          </React.Fragment>
        )}
      </Formik>
    );
  }
}
