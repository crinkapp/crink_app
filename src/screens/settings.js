import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Écran de paramètre</Text>
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
