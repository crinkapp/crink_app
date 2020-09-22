import React, { Component, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const slides = [
  {
    key: "one",
    title: "AUTHENTICITÉ",
    text:
      "Notre mission est de vous réconcilier avec l’authenticité de vos cheveux. Vous aider à les sublimer avec des produits naturels.",
    image: require("../../assets/icons/natural.png"),
    backgroundColor: "#FAECE3",
  },
  {
    key: "two",
    title: "INSTRUCTIF",
    text: "Les bons gestes ne sont pas innés, laissez-nous vous les apprendre.",
    image: require("../../assets/icons/knowledge.png"),
    backgroundColor: "#DCC8BB",
  },
  {
    key: "three",
    title: "COMMUNAUTAIRE",
    text:
      "Nous réunir autour des mêmes passions pour partager nos connaissances.",
    image: require("../../assets/icons/community.png"),
    backgroundColor: "#FAECE3",
  },
];

const _renderNextButton = () => {
  return (
    <View>
      <Text style={styles.btnLabel}>Suivant</Text>
    </View>
  );
};

const _renderDoneButton = () => {
  return (
    <View>
      <Text style={styles.btnLabel}>Terminer</Text>
    </View>
  );
};

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
  });
};

const _renderItem = ({ item }) => {
  return (
    <View style={[styles.screen, { backgroundColor: item.backgroundColor }]}>
      <View style={styles.first}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.second}>
        <Image resizeMode="contain" source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );
};

const Sliders = ({ navigation }) => {
  const [dataLoaded, setDataLoaded] = useState(false);

  // Family font fetch
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <AppIntroSlider
      renderItem={_renderItem}
      data={slides}
      renderNextButton={_renderNextButton}
      renderDoneButton={_renderDoneButton}
      activeDotStyle={{ backgroundColor: "#3A444C" }}
      onDone={() => {
        navigation.reset({
          index: 0,
          routes: [{
            name: "HomeTabs"
          }]
        });
      }}
    />
  );
};

export default Sliders;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  first: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  second: {
    flex: 7,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontFamily: "montserrat-medium",
    alignSelf: "center",
    letterSpacing: 1,
    marginTop: 40,
    color: "#B96C55",
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: 70,
  },
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
  text: {
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "montserrat-medium",
    color: "#3A444C",
  },
});
