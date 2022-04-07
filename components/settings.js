import React, { Component } from "react";
import { View,  ScrollView } from "react-native";
import SettingsSection from "./settingsSection";

export default class Settings extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    id: 0,
  };

  componentDidMount() {}

  handleSelectedAzan = (id, name) => {
    this.props.navigation.navigate("AzanSettings", { id, name });
  };
  render(props) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "#2F303C",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <ScrollView>
          <SettingsSection
            id={1}
            name={"الفجر"}
            onPress={this.handleSelectedAzan}
          />
          <SettingsSection
            id={2}
            name={"الظهر"}
            onPress={this.handleSelectedAzan}
          />
          <SettingsSection
            id={3}
            name={"العصر"}
            onPress={this.handleSelectedAzan}
          />
          <SettingsSection
            id={4}
            name={"المغرب"}
            onPress={this.handleSelectedAzan}
          />
          <SettingsSection
            id={5}
            name={"العشاء"}
            onPress={this.handleSelectedAzan}
          />
        </ScrollView>
      </View>
    );
  }
}
