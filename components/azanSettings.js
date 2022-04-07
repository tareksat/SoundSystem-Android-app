import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import ZoneSettingsSection from "./zoneSettingsSection";
import axios from "axios";
import {url} from "../url";


export default class AzanSettings extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        id: null,
        name: "",
        is_enabled: 0,
        zones: []
    };

    async getSettings() {
        // load zone names from server
        const zones = [];
        const {data} = await axios.get(`${url}/settings/${this.props.navigation.state.params.id}`);
        zones.push({id: 1, name: data.z1_name, value: data.z1_status});
        zones.push({id: 2, name: data.z2_name, value: data.z2_status});
        zones.push({id: 3, name: data.z3_name, value: data.z3_status});
        zones.push({id: 4, name: data.z4_name, value: data.z4_status});
        zones.push({id: 5, name: data.z5_name, value: data.z5_status});
        zones.push({id: 6, name: data.z6_name, value: data.z6_status});
        zones.push({id: 7, name: data.z7_name, value: data.z7_status});
        this.setState({
            id: this.props.navigation.state.params.id,
            name: this.props.navigation.state.params.name,
            zones,
            is_enabled: data.is_enabled
        })
    }

     async componentDidMount() {
        await this.getSettings();
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
                <Text style={{fontSize: 28, color: "yellow", alignSelf: "center"}}>
                    {this.state.name}
                </Text>
                <ScrollView>
                    {this.state.zones.map(zone => {
                        return (
                            <ZoneSettingsSection
                                key={zone.id}
                                name={zone.name}
                                status={zone.value === 1}
                                handleChange={this.getSettings}
                                id={zone.id}
                                azan_id={this.state.id}
                            />
                        )
                    })}

                </ScrollView>
            </View>
        );
    }
}
