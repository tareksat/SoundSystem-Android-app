// Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>M A R S </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
    //marginTop: 10
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
