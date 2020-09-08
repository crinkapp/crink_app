import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "AUTHENTICITÉ",
    text:
      "Notre mission est de vous réconcilier avec l’authenticité de vos cheveux. Vous aider à les sublimer avec des produits naturels.",
    image: require("../../assets/icons/natural.png"),
    backgroundColor: "#FAECE3",
    titleColor: "#B96C55",
    textColor: "#3A444C",
  },
  {
    key: "two",
    title: "INSTRUCTIF",
    text: "Les bons gestes ne sont pas innés, laissez-nous vous les apprendre.",
    image: require("../../assets/icons/knowledge.png"),
    backgroundColor: "#DCC8BB",
    titleColor: "#B96C55",
    textColor: "#3A444C",
  },
  {
    key: "three",
    title: "COMMUNAUTAIRE",
    text:
      "Nous réunir autour des mêmes passions pour partager nos connaissances.",
    image: require("../../assets/icons/community.png"),
    backgroundColor: "#FAECE3",
    titleColor: "#B96C55",
    textColor: "#3A444C",
  },
];

export default class Sliders extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: 30,
          paddingVertical: 20,
          backgroundColor: item.backgroundColor,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            fontFamily: "montserrat-medium",
            alignSelf: "center",
            color: item.titleColor,
          }}
        >
          {item.title}
        </Text>
        <Image
          source={item.image}
          style={{
            resizeMode: "center",
            height: 280,
            width: "100%",
          }}
        />
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            alignSelf: "center",
            textAlign: "center",
            fontFamily: "montserrat-light",
            color: item.textColor,
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View>
        <Text style={styles.btnLabel}>Suivant</Text>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View>
        <Text style={styles.btnLabel}>Terminer</Text>
      </View>
    );
  };

  _onDone = () => {
    this.props.navigation.navigate("HomeTabs");
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
        activeDotStyle={{ backgroundColor: "#3A444C" }}
        onDone={this._onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  nextBtn: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
  },
  btnLabel: {
    color: "#3A444C",
    fontSize: 18,
    padding: 12,
  },
});
