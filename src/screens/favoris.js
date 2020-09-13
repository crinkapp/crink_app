import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import globalStyle from "../styles";

export default class Favoris extends React.Component {
  render() {
    return (
      <View style={globalStyle.appScreen}>
        <Text style={styles.text}>Écran des favoris</Text>
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
});
