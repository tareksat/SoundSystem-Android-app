import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import axios from "axios";
import {url} from "../url";
import PrayerSection from "./prayerSection";

export default class Azan extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
        date: {},
        prayerTimes: {},
        interval: null
    };

    loadPrayerTimes = async () => {
        try {
            const {data} = await axios.get(`${url}/prayertimes`);
            const {date, prayerTimes} = data;
            this.setState({
                date,
                prayerTimes,
            });
        } catch (e) {
            console.log("Error", message);
        }
    }

    async componentDidMount() {
        await this.loadPrayerTimes();
        const interval = setInterval(async()=>{
            await this.loadPrayerTimes();
        }, 1000);

        this.setState({
            interval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
        this.setState({interval : null})
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
                <Text style={styles.headerStyle}>
                    {this.state.date.day
                        ? `${this.state.date.day} ${this.state.date.month_ar} ${this.state.date.year}`
                        : "Server Error!"}
                </Text>
                <ScrollView>
                    <PrayerSection
                        id={1}
                        name={"الفجر"}
                        time={this.state.prayerTimes.Fajr}
                    />
                    <PrayerSection
                        id={2}
                        name={"الظهر"}
                        time={this.state.prayerTimes.Dhuhr}
                    />
                    <PrayerSection
                        id={3}
                        name={"العصر"}
                        time={this.state.prayerTimes.Asr}
                    />
                    <PrayerSection
                        id={4}
                        name={"المغرب"}
                        time={this.state.prayerTimes.Maghrib}
                    />
                    <PrayerSection
                        id={5}
                        name={"العشاء"}
                        time={this.state.prayerTimes.Isha}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    headerStyle: {
        fontSize: 28,
        color: "white",
        alignSelf: "center",
        margin: 20,
    },
};
