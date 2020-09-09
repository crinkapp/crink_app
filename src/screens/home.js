import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import PublicationPreview from "../components/publication-preview";

const image1 = require("../../assets/img/pic1.jpeg");
const title1 = "Comment peigner vos cheveux bouclés ?"
const tags1 = ["bouclés", "afro", "peigne", "soins"];
const likes1 = 723;
const comments1 = 32;
const username1 = "Saïdou";
const userIcon1 = require("../../assets/img/usericon.jpeg");

const image2 = require("../../assets/img/savane.jpeg");
const title2 = "Comment voir des girafes dans la savane ?"
const tags2 = ["girafe", "savane", "animal"];
const likes2 = 413;
const comments2 = 19;
const username2 = "Aïssatou";
const userIcon2 = require("../../assets/img/pic2.jpeg");

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <PublicationPreview
          image={image1}
          title={title1}
          tags={tags1}
          likes={likes1}
          comments={comments1}
          username={username1}
          userIcon={userIcon1}
        ></PublicationPreview>

        <PublicationPreview
          image={image2}
          title={title2}
          tags={tags2}
          likes={likes2}
          comments={comments2}
          username={username2}
          userIcon={userIcon2}
        ></PublicationPreview>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: "#3A444C",
    fontWeight: "300",
    paddingBottom: 30,
    fontSize: 28,
  },
});
