import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Settings extends React.Component {
  logout = () => {
    return axios.delete(`${API_URL}/user`);
  };

  _onLogout = () => {
    this.logout()
      .then((res) => console.log(`Disconnect : ${JSON.stringify(res.data)}`))
      .catch((err) => console.log(`Error : ${err.response} test`));
  };

  getUser = () => {
    return axios
      .get(`${API_URL}/user`)
      .then((res) => {
        console.log(`error server : ${err.response}`);
      })
      .catch((err) => {
        // If incorrect email or password
        if (err.request) {
          console.log(`error server : ${err.response}`);
        }
      });
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Écran de paramètre</Text>
        <TouchableOpacity onPress={this._onLogout}>
          <Button
            title="Se déconecter"
            color="#D55E5E"
          ></Button>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 30,
  },
  text: {
    color: "#3A444C",
    fontWeight: "300",
    paddingBottom: 30,
    fontSize: 28,
  },
});
