import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "AUTHENTICITÉ",
    text: "Notre mission est de vous réconcilier avec l’authenticité de vos cheveux. Vous aider à les sublimer avec des produits naturels.",
    image: require("../../assets/natural.png"),
    backgroundColor: "#B96C55",
  },
  {
    key: "two",
    title: "INSTRUCTIF",
    text: "Les bons gestes ne sont pas innés, laissez-nous vous les apprendre.",
    image: require("../../assets/knowledge.png"),
    backgroundColor: "#B96C55",
  },
  {
    key: "three",
    title: "COMMUNAUTAIRE",
    text:
      "Nous réunir autour des mêmes passions pour partager nos connaissances.", image: require("../../assets/community.png"),
    backgroundColor: "#B96C55",
  },
];

export default class Sliders extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 50,
          paddingHorizontal: 40,
          backgroundColor: "#FAECE3",
        }}
      >
        <Image
          source={item.image}
          style={{
            resizeMode: "center",
            height: 250,
            width: "100%"
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            fontSize: 22,
            fontFamily: "montserrat-medium",
            alignSelf: "center",
            color: "#B96C55",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            paddingTop: 25,
            fontSize: 18,
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
            fontFamily: "montserrat-light",
            color: "#3A444C",
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        activeDotStyle={{ backgroundColor: "#B96C55"}}
      />
    );
  }
}
