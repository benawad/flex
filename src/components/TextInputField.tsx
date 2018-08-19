import * as React from "react";
import { TextInput } from "react-native";
import { FieldProps } from "formik";

export class TextInputField extends React.PureComponent<FieldProps<any>> {
  handleText = (text: string) => {
    const {
      field: { name },
      form: { setFieldValue }
    } = this.props;
    setFieldValue(name, text);
  };

  render() {
    const {
      field: { value }, // { name, value, onChange, onBlur }
      form: _, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...props
    } = this.props;
    return (
      <TextInput {...props} value={value} onChangeText={this.handleText} />
    );
  }
}
