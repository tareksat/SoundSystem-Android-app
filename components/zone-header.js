import React, { Component } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import { url } from "../url";
import Button from "./Button";

export default class ZoneHeader extends Component {
  Styles = {
    container: {
      height: 100,
      width: "95%",
      borderRadius: 10,
      backgroundColor: "#454652",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: "#828282",

      marginTop: 5,
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10,
    },
    buttonContainer: {
      flexDirection: "row",
      flex: 1,
      //width: "98%",
      backgroundColor: "#454652",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 0,
      marginBottom: 10,
      marginRight: 0,
      marginLeft: 0,
    },
    textStyle: {
      color: "#1CFF4E",
      fontSize: 22,
      margin: 5,
    },
  };

  setZoneON = () => {
    axios.post(`${url}/zones/controlAll`, { value: 1 });
  };

  setZoneOFF = () => {
    axios.post(`${url}/zones/controlAll`, { value: 0 });
  };

  render(props) {
    return (
      <View style={this.Styles.container}>
        <Text style={this.Styles.textStyle}>{this.props.name}</Text>
        <View style={this.Styles.buttonContainer}>
          <Button status={"ON"} onPress={() => this.setZoneON()}>
            ON
          </Button>
          <Button status={"OFF"} onPress={() => this.setZoneOFF()}>
            OFF
          </Button>
        </View>
      </View>
    );
  }
}
