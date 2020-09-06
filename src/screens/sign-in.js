import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Button,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { API_URL } from "react-native-dotenv";
import { isLoaded, isLoading } from "expo-font";
import globalStyle from "../styles";

const bgImage = require("../../assets/img/pic1.jpeg");
const crinkIcon = require("../../assets/icons/crink-logo-white.png");

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      errorMsg: "",
      isLoading: false,
    };
  }

  _goToHome = () => {
    this.props.navigation.navigate("Home");
  };

  _goToSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  login = () => {
    return fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        Accet: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_user: this.state.email,
        password_user: this.state.password,
      }),
    }).catch((err) => {
      this.setState({
        error: true,
        errorMsg:
          "Le service est momentanément indisponible. Veuillez réessayer ultérieurement.",
      });
    });
  };

  _onPress = () => {
    this.setState({ isLoading: true });
    this.login().then((res) => {
      // console.log(JSON.stringify(res.status));
      this.setState({ isLoading: false });
      if (res.status === 200) {
        this.setState({ error: false });
        this._goToHome();
      } else {
        this.setState({
          error: true,
          errorMsg: "Oops… mauvais email ou mot de passe",
        });
      }
    });
  };

  onError = () => {
    if (this.state.error) {
      return (
        <View>
          <Text
            style={{
              color: "#fff",
              marginTop: 14,
              fontSize: 14,
              fontWeight: "500",
              padding: 10,
            }}
          >
            {this.state.errorMsg}
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={globalStyle.signScreen}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.bgFilter}>
            <View style={{ alignItems: "center" }}>
              <Image source={crinkIcon} style={globalStyle.signCrinkIcon} />
              <Text style={styles.text}>Connectez-vous</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <TextInput
                style={
                  this.state.error ? globalStyle.signInputTextError : globalStyle.signInputText
                }
                placeholderTextColor="#fff"
                placeholder="Email"
                autoCompleteType="off"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
                value={this.state.email}
              />
              <TextInput
                style={
                  this.state.error ? globalStyle.signInputTextError : globalStyle.signInputText
                }
                secureTextEntry={true}
                placeholderTextColor="#fff"
                placeholder="Mot de passe"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
              {this.onError()}
              <TouchableOpacity style={globalStyle.signBtn}>
                <Button
                  color="#FAECE3"
                  title="Se connecter"
                  onPress={this._onPress}
                  disabled={this.state.isLoading}
                />
                <ActivityIndicator
                  size="small"
                  color="#fff"
                  style={{ display: this.state.isLoading ? "flex" : "none" }}
                />
              </TouchableOpacity>
              <Text style={{ color: "#FAECE3", fontSize: 16, marginTop: 24 }}>
                Mot de passe oublié ?
              </Text>
            </View>
            <View>
              <View
                style={{
                  borderBottomColor: "#FAECE3",
                  borderBottomWidth: 1,
                  width: 200,
                  marginBottom: 20,
                }}
              />
              <TouchableOpacity>
                <Button
                  titleStyle={{ fontSize: 12 }}
                  color="#FAECE3"
                  title="Pas encore inscrit ?"
                  onPress={this._goToSignUp}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-around",
  },
  bgFilter: {
    flex: 1,
    backgroundColor: "rgba(185,108,85,0.6)",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 45,
  },
  text: {
    color: "#fff",
    fontWeight: "300",
    letterSpacing: 1,
    paddingBottom: 30,
    fontSize: 24,
  },
  signUpText: {
    fontSize: 12,
  },
});
