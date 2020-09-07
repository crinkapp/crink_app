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
import DismissKeyboard from "../../components/dismiss-keyboard";
import axios from "axios";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: false,
      errorServer: false,
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
    return axios.post(`${API_URL}/login`, {
      email_user: this.state.email,
      password_user: this.state.password,
    });
  };

  _onPress = () => {
    this.setState({ isLoading: true });
    this.login()
      .then((res) => {
        // Success login
        this.setState({ isLoading: false, error: false, errorServer: false });
        this._goToHome();
      })
      .catch((err) => {
        // If incorrect email or password
        if (err.response) {
          this.setState({
            isLoading: false,
            error: true,
            errorServer: false,
            errorMsg: "Adresse email ou mot de passe incorrect.",
          });
        } else if (err.request) {
          // Server error handling
          this.setState({
            isLoading: false,
            error: true,
            errorServer: true,
            errorMsg:
              "Le service est momentanément indisponible. Veuillez réessayer ultérieurement.",
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
      <DismissKeyboard>
        <View style={globalStyle.signScreen}>
          <Text style={globalStyle.signTitle}>Se connecter</Text>
          <TextInput
            style={[
              globalStyle.signInputText,
              {
                borderColor:
                  this.state.error && !this.state.errorServer
                    ? "#D55E5E"
                    : "#FDFDFD",
              },
            ]}
            clearButtonMode="always"
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
              {
                borderColor:
                  this.state.error && !this.state.errorServer
                    ? "#D55E5E"
                    : "#FDFDFD",
              },
            ]}
            clearButtonMode="always"
            secureTextEntry={true}
            placeholderTextColor="#3A444C"
            placeholder="Mot de passe"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />

          {this.onError()}
          <TouchableOpacity style={globalStyle.signBtn} disabled={this.state.isLoading}>
            <Button
              color="#fff"
              title="Connexion"
              onPress={this._onPress}
              disabled={this.state.isLoading}
            />
            <ActivityIndicator
              size="small"
              color="#fff"
              style={{ display: this.state.isLoading ? "flex" : "none" }}
            />
          </TouchableOpacity>
          <View style={globalStyle.signSeparationLine}></View>
          <Text style={[styles.smText, { marginBottom: 14 }]}>
            Mot de passe oublié ?
          </Text>
          <TouchableOpacity onPress={this._goToSignUp}>
            <Text style={styles.smText}>Pas encore inscrit ? <Text style={{fontWeight: "600"}}> S'inscrire</Text></Text>
          </TouchableOpacity>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  smText: {
    color: "#3A444C",
    fontSize: 16,
    alignSelf: "center",
  },
});
