import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Button } from "react-native";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";
import { TouchableOpacity } from "react-native-gesture-handler";
import SettingPreview from "../components/setting-preview";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
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
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        if (err.request) {
          console.log(`error server : ${err.response}`);
        }
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <View style={styles.screen}>
        <SettingPreview
          onLogout={() => this._onLogout()}
          goToProfile={() => {
            this.props.navigation.navigate("Profile", {
              user: this.state.user,
              iconPath: this.state.user.path_profil_picture_user
                ? `${S3_URL}${this.state.user.path_profil_picture_user}`
                : "https://crinksite.s3.eu-west-3.amazonaws.com/no-picture.jpg",
              isActualUser: true,
            });
          }}
        ></SettingPreview>
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
