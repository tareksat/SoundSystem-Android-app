import React, {useState} from "react";
import { View, Text, Switch } from "react-native";
import axios from "axios";
import {url} from "../url";

const ZoneSettingsSection = (props) => {
  const {id, name, azan_id, handleChange} = props;
const [status, setStatus] = useState(props.status)
  const handleStatusChange = async () => {
    let payload = {}
    if(id===0){
      payload = {is_enabled: status? 0:1}
    }
    else if(id===1){
      payload = {z1_status: status? 0:1}
    }
    else if(id===2){
      payload = {z2_status: status? 0:1}
    }
    else if(id===3){
      payload = {z3_status: status? 0:1}
    }
    else if(id===4){
      payload = {z4_status: status? 0:1}
    }
    else if(id===5){
      payload = {z5_status: status? 0:1}
    }
    else if(id===6){
      payload = {z6_status: status? 0:1}
    }
    else{
      payload = {z7_status: status? 0:1}
    }
    setStatus(!status)
    await axios.post(`${url}/settings/`, {
      id: azan_id,
      payload
    })
    handleChange();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b011" }}
        thumbColor={status? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3f"
        onValueChange={handleStatusChange}
        value={status}
      />
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

export default ZoneSettingsSection;
