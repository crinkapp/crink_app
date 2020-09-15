import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import { TouchableOpacity } from "react-native-gesture-handler";
import SettingPreview from "../components/setting-preview";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    return axios.delete(`${API_URL}/user`);
  };

  _onLogout = () => {
    this.logout()
      .then((res) => {
        console.log(`Disconnect : ${JSON.stringify(res.data)}`);
        this.props.navigation.reset({
          index: 0,
          routes: [
            {
              name: "LoginNavigation",
            },
          ],
        });
      })
      .catch((err) => console.log(`Error : ${err.response}`));
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
        <SettingPreview onLogout={() => this._onLogout()}></SettingPreview>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
