import React, { Component } from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";

export default class SignUp extends React.Component {
  _goToSlider = () => {
    this.props.navigation.navigate("SliderIntro");
  };

  _goToSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Inscrivez-vous</Text>
        <View>
          <Button
            style={styles.button}
            color="#B96C55"
            title="Inscription"
            onPress={this._goToSlider}
          />
          <Button
            style={styles.button}
            color="#B96C55"
            title="Déjà inscrit ?"
            onPress={this._goToSignIn}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 30,
  },
  text: {
    color: "#3A444C",
    fontWeight: "300",
    paddingBottom: 30,
    fontSize: 28,
  },
  button: {
    paddingVertical: 10,
  },
});
