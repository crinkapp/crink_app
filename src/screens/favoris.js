import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import globalStyle from "../styles";
import Icon from "react-native-vector-icons/FontAwesome5"

const emptyFavoris = require("../../assets/icons/reviews.png");

export default class Favoris extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={globalStyle.appScreen}>
        <View style={styles.emptySection}>
          <Image source={emptyFavoris} style={styles.img} />
          <Text style={styles.title}>Aucun favoris</Text>
          <Text style={styles.info}>
            Tes publications favoris seront au chaud ici.
          </Text>
          <TouchableOpacity
            style={[globalStyle.basicBtn, globalStyle.bgInfo]}
            onPress={() => this.props.navigation.navigate("Search")}
          >
          <Icon name="search" size={17} style={{marginRight: 6}} color="#fff" />
            <Text style={globalStyle.basicBtnLabel}>
              Explorer les publications
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#3A444C",
    fontWeight: "300",
    paddingBottom: 30,
    fontSize: 28,
  },
  img: {
    height: 230,
    width: 300,
    alignSelf: "stretch",
    marginVertical: 30,
    resizeMode: "cover",
  },
  emptySection: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#3A444C",
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 16,
  },
  info: {
    color: "#3A444C",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20,
  },
});
