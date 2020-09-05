import React, { Component } from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";

export default class SignIn extends React.Component {
  _goToHome = () => {
    this.props.navigation.navigate("Home");
  };

  _goToSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  render() {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Connectez-vous</Text>
        <View>
        <Button
          style={styles.button}
          color="#B96C55"
          title="Se connecter"
          onPress={this._goToHome}
        />
        <Button
          style={styles.button}
          color="#B96C55"
          title="Pas encore inscrit ?"
          onPress={this._goToSignUp}
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
