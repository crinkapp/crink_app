import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { API_URL } from "react-native-dotenv";
import globalStyle from "../styles";

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
          errorMsg: "Adresse email ou mot de passe incorrect",
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
              color: "#D55E5E",
              marginTop: 10,
              fontSize: 14,
              fontWeight: "300",
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
        <Text style={globalStyle.signTitle}>Se connecter</Text>
        <TextInput
          style={[
            globalStyle.signInputText,
            { borderColor: this.state.error ? "#D55E5E" : "#FDFDFD" },
          ]}
          placeholderTextColor="#3A444C"
          placeholder="Adresse email"
          autoCompleteType="off"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={[
            globalStyle.signInputText,
            { borderColor: this.state.error ? "#D55E5E" : "#FDFDFD" },
          ]}
          secureTextEntry={true}
          placeholderTextColor="#3A444C"
          placeholder="Mot de passe"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        {this.onError()}
        <TouchableOpacity style={globalStyle.signBtn}>
          <Button
            color="#fff"
            title="Connexion"
            onPress={this._onPress}
            disabled={this.state.isLoading}
          />
          <ActivityIndicator
            size="small"
            color="#3A444C"
            style={{ display: this.state.isLoading ? "flex" : "none" }}
          />
        </TouchableOpacity>
        <View style={styles.separationLine}></View>
        <Text style={[styles.smText, { marginBottom: 14 }]}>
          Mot de passe oublié ?
        </Text>
        <TouchableOpacity onPress={this._goToSignUp}>
          <Text style={styles.smText}>Pas encore inscrit ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separationLine: {
    marginVertical: 40,
    borderColor: "#3A444C",
    borderWidth: 0.7,
    width: "70%",
    alignSelf: "center",
  },
  smText: {
    color: "#3A444C",
    fontSize: 16,
    alignSelf: "center",
  },
});
