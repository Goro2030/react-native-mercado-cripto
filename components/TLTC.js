import React from "react";
import { StyleSheet, Text, View } from "react-native";

class TLTC extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 0.365,
          flexDirection: "row",
        }}
      >
        <View style={styles.name}>
          <Text style={{ color: "white" }}>LTC</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$$</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$$-1</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$+1</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$%</Text>
        </View>
        <View style={styles.sLTCrow}>
          <Text style={{ color: "white" }}>$$$Coin</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sLTCrow: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "auto",
    backgroundColor: "#343a40",
    borderLeftColor: "#95999c",
    borderLeftWidth: 1,
    borderRightColor: "#95999c",
    borderRightWidth: 1,
    borderBottomColor: "#95999c",
    borderBottomWidth: 1,
  },
  name: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "auto",
    backgroundColor: "#343a40",
    borderLeftColor: "#95999c",
    borderLeftWidth: 1,
    borderRightColor: "#95999c",
    borderRightWidth: 1,
    borderBottomColor: "#95999c",
    borderBottomWidth: 1,
  },
});

export default TLTC;
