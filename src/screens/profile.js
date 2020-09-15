import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyle from "../styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";

const noUser = "https://crinksite.s3.eu-west-3.amazonaws.com/no-picture.jpg";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount = () => {
    this.getProfileInfo()
      .then((user) => {
        this.setState({
          user: user.data,
        });
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  getProfileInfo = () => {
    return axios.get(`${API_URL}/user`);
  };

  render() {
    return (
      <ScrollView backgroundColor="#fff">
        <View style={globalStyle.appScreen}>
          <Image
            source={{
              uri: this.state.user.path_media_publication
                ? `${S3_URL}/${this.state.user.path_media_publication}`
                : `https://crinkdev.s3.eu-west-3.amazonaws.com/user/fav-icon.png`,
            }}
            // : noUser,
            style={styles.image}
          ></Image>
          <View style={{flexDirection: "row", alignItems: "center", marginTop: 12}}>
            <Text style={styles.username}>
              {this.state.user.username ? this.state.user.username : "Crink"}
              {/* this.state.user.path_media_publication */}
            </Text>
            <Icon
              name="certificate"
              size={16}
              color="#379EE5"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              padding: 20,
              width: "100%",
            }}
          >
            <View style={styles.stats}>
              <Text style={styles.numbers}>12</Text>
              <Text style={styles.statsLabel}>ARTICLES</Text>
            </View>
            <View style={styles.separationBorder}></View>
            <View style={styles.stats}>
              <Text style={styles.numbers}>8,1 M</Text>
              <Text style={styles.statsLabel}>ABONNÉS</Text>
            </View>
            <View style={styles.separationBorder}></View>
            <View style={styles.stats}>
              <Text style={styles.numbers}>34</Text>
              <Text style={styles.statsLabel}>ABONNEMENTS</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    resizeMode: "center",
  },
  username: {
    fontSize: 16,
    marginRight: 6,
    color: "#3A444C",
  },
  stats: {
    marginHorizontal: 25,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 110,
  },
  numbers: {
    fontSize: 13,
    marginBottom: 4,
    fontWeight: "600",
    color: "#3A444C",
  },
  statsLabel: {
    fontSize: 9,
    color: "#ABABAB",
  },
  separationBorder: {
    borderLeftWidth: 0.6,
    borderLeftColor: "#ABABAB",
  },
});
