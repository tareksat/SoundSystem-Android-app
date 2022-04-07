import React from "react";
import { View, Text } from "react-native";

const PrayerSection = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.time}</Text>
      <Text style={styles.textStyle}> {props.name} </Text>
    </View>
  );
};
const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#454652",
    margin: 10,
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
    color: "yellow",
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

export default PrayerSection;
