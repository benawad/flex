import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { optimizeNumPlates } from "../../utils/optimizeNumPlates";

interface Props {
  name: string;
  amount: number;
  liftAmounts: number[];
}

interface State {
  showPlatesFor: number | null;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    marginBottom: 10
  },
  text: {
    fontSize: 20
  },
  max: {
    fontWeight: "800"
  }
});

export class LiftRow extends React.PureComponent<Props, State> {
  state = {
    showPlatesFor: null
  };

  render() {
    const { name, amount, liftAmounts } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center", paddingBottom: 15 }}>
          <Text style={{ fontSize: 25 }}>
            {name.replace(/([A-Z])/g, " $1").toLowerCase()}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {liftAmounts.map((n, i) => (
            <TouchableOpacity
              key={`${i}-n`}
              onPress={() =>
                this.setState({
                  showPlatesFor: this.state.showPlatesFor === n ? null : n
                })
              }
            >
              <Text
                style={[styles.text, n === amount ? styles.max : undefined]}
              >
                {n}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        {this.state.showPlatesFor ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {Object.entries(
              optimizeNumPlates(this.state.showPlatesFor || 0)
            ).map(([k, v]) => (
              <Text key={`${k}-plate`}>{`${k}x${v}`}</Text>
            ))}
          </View>
        ) : null}
      </View>
    );
  }
}
