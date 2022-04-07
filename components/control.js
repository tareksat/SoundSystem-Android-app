import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Relay from "./Relay";
import ZoneHeader from "./zone-header";
import { url, socketURL } from "../url";
import axios from "axios";
import { io } from "socket.io-client";

export default class Control extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    ports: [
      { id: 1, name: "Living", value: 0 },
      { id: 2, name: "Office", value: 0 },
      { id: 3, name: "Reception", value: 0 },
      { id: 4, name: "Master Room", value: 0 },
      { id: 5, name: "Neptune", value: 0 },
      { id: 6, name: "Uranus", value: 0 },
      { id: 7, name: "GYM", value: 0 },
    ],
    interval: null,
  };

  handleRelayPress = async (id, value) => {
    try {
      await axios.post(`${url}/zones/controlZoneStatus/`, {
        id,
        status: value,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  handleChangeName = (id, name) => {
    const relay = [...this.state.ports];
    relay[id - 1].name = name;
    this.setState(() => {
      return {
        ports: relay,
      };
    });
  };

  handleChangeStatus = (id, status) => {
    const relay = [...this.state.ports];
    relay[id - 1].value = status;
    this.setState(() => {
      return {
        ports: relay,
      };
    });
  };

  handleChangeAllStatuses = (status) => {
    const relays = [...this.state.ports];
    relays.map((relay, index) => {
      relays[index].value = status;
    });
    this.setState(() => {
      return {
        ports: relays,
      };
    });
  };

  loadData = async () => {
    try {
      const { data } = await axios.get(`${url}/zones/`);
      this.setState({
        ports: data,
      });
    } catch (e) {
      console.log(e.message());
    }
  };

  async componentDidMount() {
    try {
      await this.loadData();
      const interval = setInterval(async () => {
        this.loadData();
      }, 1000);
      this.setState({ interval });
      const socket = io(socketURL, { transports: ["websocket"] });

      // listens for name change event from socket
      socket.on("name-change", ({ id, name }) => {
        this.handleChangeName(id, name);
      });

      // listens for value change event from socket
      socket.on("status-change", ({ id, status }) => {
        this.handleChangeStatus(id, status);
      });

      // listens for value change event for all zones from socket
      socket.on("All", (value) => {
        this.handleChangeAllStatuses(value);
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    this.setState({ interval: null });
  }

  render(props) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#2F303C",
          justifyContent: "flex-start",
        }}
      >
        <ZoneHeader />
        <ScrollView>
          {this.state.ports.map((relay) => {
            return (
              <Relay
                key={relay.id}
                port={relay}
                onPress={this.handleRelayPress}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
