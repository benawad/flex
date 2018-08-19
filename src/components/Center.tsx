import * as React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  }
});

export class Center extends React.PureComponent {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}
