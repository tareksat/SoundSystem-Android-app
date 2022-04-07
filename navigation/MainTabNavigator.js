import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Control from "../components/control";
import Azan from "../components/azan";
import AzanSettings from "../components/azanSettings";
import Settings from "../components/settings";

import TabBarIcon from "../components/TabBarIcon";

const AzanStack = createStackNavigator({
  Home: Azan,
});

AzanStack.navigationOptions = {
  tabBarLabel: "Prayers",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home` : "md-home"}
    />
  ),
};

const ControlStack = createStackNavigator({
  Links: Control,
});

ControlStack.navigationOptions = {
  tabBarLabel: "Control",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-link"}
    />
  ),
};

const ConfigStack = createStackNavigator({
  Config: Settings,
  AzanSettings: AzanSettings,
});

ConfigStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-settings` // ${focused ? '' : '-outline'}`
          : "md-settings"
      }
    />
  ),
};

export default createBottomTabNavigator(
  {
    AzanStack,
    ControlStack,
    ConfigStack,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "#171F33", // TabBar background
      },
    },
  }
);
