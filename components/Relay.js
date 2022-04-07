import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Relay = (props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        let val = 0;
        if (props.port.value) {
          val = 0;
        } else {
          val = 1;
        }
        props.onPress(props.port.id, val);
      }}
    >
      <Text style={styles.textStyle}> {props.port.name} </Text>

      <View
        style={[
          props.port.value ? styles.indicatorStyleOn : styles.indicatorStyleOff,
        ]}
      />
    </TouchableOpacity>
  );
};
const styles = {
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 5,
    backgroundColor: "#454652",
    margin: 5,
    height: 80,
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 8,
    width: "95%",
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    color: "white",
  },
  indicatorStyleOn: {
    width: 120,
    height: 12,
    borderRadius: 4,
    borderWidth: 0.9,
    borderColor: "#434c41",
    backgroundColor: "#3cf260",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowColor: "#fff",
    shadowOpacity: 0.5,
    elevation: 1,
    marginBottom: 5,
    marginTop: 10,
  },
  indicatorStyleOff: {
    width: 100,
    height: 12,
    borderRadius: 4,
    borderWidth: 0.9,
    borderColor: "#434c41",
    backgroundColor: "#e23b3d", //
    shadowOffset: { width: 0, height: -1 },
    shadowRadius: 10,
    shadowColor: "#f78a8b",
    shadowOpacity: 0.5,
    elevation: 1,
    marginBottom: 5,
    marginTop: 10,
  },
};

export default Relay;
