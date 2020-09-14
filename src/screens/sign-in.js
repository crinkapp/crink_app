import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { API_URL } from "react-native-dotenv";
import globalStyle from "../styles";
import DismissKeyboard from "../components/dismiss-keyboard";
import axios from "axios";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorEmail: false,
      errorPassword: false,
      errorSignIn: false,
      errorServer: false,
      errorMsg: "",
      isLoading: false,
    };
  }

  validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    reg.test(this.state.email) === false
      ? this.setState({ errorEmail: true })
      : this.setState({ errorEmail: false });
  };

  validatePassword = () => {
    this.state.password.length < 6
      ? this.setState({ errorPassword: true })
      : this.setState({ errorPassword: false });
  };

  _goToHome = () => {
    this.props.navigation.reset({
      index: 0,
      routes: [
        {
          name: "HomeTabs",
        },
      ],
    });
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

  getUser = () => {
    return axios.get(`${API_URL}/user`);
  };

  _onPress = () => {
    this.setState({ isLoading: true });
    this.login()
      .then((res) => {
        // Success login
        this.setState({
          isLoading: false,
          errorSignIn: false,
          errorServer: false,
        });
        this.getUser().then((user) =>
          this._goToHome()
        );
      })
      .catch((err) => {
        // If incorrect email or password
        if (err.response) {
          this.setState({
            isLoading: false,
            errorSignIn: true,
            errorServer: false,
            errorMsg: "Adresse email ou mot de passe incorrect.",
          });
        } else if (err.request) {
          // Server error handling
          this.setState({
            isLoading: false,
            errorSignIn: true,
            errorServer: true,
            errorMsg:
              "Le service est momentanément indisponible. Veuillez réessayer ultérieurement.",
          });
        }
      });
  };

  onErrorEmail = () => {
    if (this.state.errorEmail) {
      return (
        <View>
          <Text style={globalStyle.signErrorMsg}>Format invalide.</Text>
        </View>
      );
    }
  };

  onErrorPassword = () => {
    if (this.state.errorPassword) {
      return (
        <View>
          <Text style={globalStyle.signErrorMsg}>
            Votre mot de passe doit contenir au minimum 6 caractères.
          </Text>
        </View>
      );
    }
  };

  onErrorSignIn = () => {
    if (this.state.errorSignIn) {
      return (
        <View>
          <Text
            style={{
              color: "#D55E5E",
              marginVertical: 5,
              fontSize: 12,
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
                  (this.state.errorEmail || this.state.errorSignIn) &&
                  !this.state.errorServer
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
            onBlur={this.validateEmail}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
          {this.onErrorEmail()}
          <TextInput
            style={[
              globalStyle.signInputText,
              {
                borderColor:
                  (this.state.errorEmail || this.state.errorSignIn) &&
                  !this.state.errorServer
                    ? "#D55E5E"
                    : "#FDFDFD",
              },
            ]}
            clearButtonMode="always"
            secureTextEntry={true}
            autoCompleteType="off"
            placeholderTextColor="#3A444C"
            placeholder="Mot de passe"
            onBlur={this.validatePassword}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          {this.onErrorPassword()}
          {this.onErrorSignIn()}
          <TouchableOpacity style={globalStyle.signBtn}>
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
          <TouchableOpacity onPress={this._goToHome}>
            <Text style={[globalStyle.signSmText, { marginBottom: 14 }]}>
              Mot de passe oublié ?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._goToSignUp}>
            <Text style={globalStyle.signSmText}>
              Pas encore inscrit ?{" "}
              <Text style={{ fontWeight: "600" }}> S'inscrire</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </DismissKeyboard>
    );
  }
}
