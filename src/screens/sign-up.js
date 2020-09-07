import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { API_URL } from "react-native-dotenv";
import globalStyle from "../styles";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import DismissKeyboard from "../../components/dismiss-keyboard";
import axios from "axios";
import Constants from "expo-constants";

const genders = [
  { label: "Homme", value: "Man" },
  { label: "Femme", value: "Woman" },
];

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "Man",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorUsername: false,
      errorEmail: false,
      errorPassword: false,
      errorServer: false,
      isLoading: false,
    };
  }

  validateUsername = () => {
    this.state.username.length < 2
      ? this.setState({ errorUsername: true })
      : this.setState({ errorUsername: false });
  };

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

  _goToSlider = () => {
    this.props.navigation.navigate("SliderIntro");
  };

  _goToSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };

  register = () => {
    return axios.post(`${API_URL}/register`, {
      gender_user: this.state.gender,
      username_user: this.state.username,
      email_user: this.state.email,
      password_user: this.state.password,
    });
  };

  _onPress = () => {
    this.validateUsername();
    this.validateEmail();
    this.validatePassword();
    if (
      !this.state.errorUsername &&
      !this.state.errorEmail &&
      !this.state.errorPassword
    ) {
      this.setState({ isLoading: true });
      this.register()
        .then((res) => {
          // Success login
          this.setState({ isLoading: false, error: false, errorServer: false });
          this._goToSlider();
        })
        .catch((err) => {
          // If incorrect email or password
          console.log(err.response.data);
        });
    }
    this.setState({ isLoading: false });
  };

  onErrorUsername = () => {
    if (this.state.errorUsername) {
      return (
        <View>
          <Text style={globalStyle.signErrorMsg}>
            Le nom d'utilisateur doit contenir au moins 2 caractères.
          </Text>
        </View>
      );
    }
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

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#FAECE3" }}>
        <DismissKeyboard>
          <View style={globalStyle.signScreen}>
            <Text style={globalStyle.signTitle}>S'inscrire</Text>
            <RadioForm
              radio_props={genders}
              initial={"Man"}
              formHorizontal={true}
              style={{ marginVertical: 10 }}
              selectedButtonColor="#B96C55"
              labelStyle={{
                fontSize: 16,
                color: "#3A444C",
                marginRight: 20,
                fontWeight: "300",
              }}
              buttonColor={"#B96C55"}
              onPress={(value) => {
                this.setState({ gender: value });
              }}
            />
            <TextInput
              style={[
                globalStyle.signInputText,
                {
                  borderColor: this.state.errorUsername ? "#D55E5E" : "#FDFDFD",
                },
              ]}
              clearButtonMode="always"
              placeholderTextColor="#3A444C"
              placeholder="Nom d'utilisateur"
              autoCompleteType="off"
              autoCapitalize="none"
              onBlur={this.validateUsername}
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
            {this.onErrorUsername()}
            <TextInput
              style={[
                globalStyle.signInputText,
                {
                  borderColor: this.state.errorEmail ? "#D55E5E" : "#FDFDFD",
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
                  borderColor: this.state.errorPassword ? "#D55E5E" : "#FDFDFD",
                },
              ]}
              autoCompleteType="off"
              secureTextEntry={true}
              placeholderTextColor="#3A444C"
              placeholder="Mot de passe"
              onChangeText={(password) => this.setState({ password })}
              onBlur={this.validatePassword}
              value={this.state.password}
            />
            <Text
              style={{ fontWeight: "300", color: "#3A444C", marginBottom: 2 }}
            >
              (6 caractères minimum)
            </Text>
            {this.onErrorPassword()}
            <TouchableOpacity style={globalStyle.signBtn}>
              <Button
                color="#fff"
                title="Inscription"
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
            <TouchableOpacity onPress={this._goToSignIn}>
              <Text style={globalStyle.signSmText}>
                Vous avez déjà un compte ?
                <Text style={styles.textBold}> Se connecter </Text>
              </Text>
            </TouchableOpacity>
            <Text style={styles.cgu}>
              En vous inscrivant, vous approuvez nos
              <Text style={styles.textBold}> Conditions d'utilisation </Text>
              et notre
              <Text style={styles.textBold}> Politique de Confidentialité</Text>
              .
            </Text>
          </View>
        </DismissKeyboard>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cgu: {
    textAlign: "center",
    color: "#3A444C",
    alignSelf: "center",
    marginTop: 24,
    fontSize: 13,
  },
  textBold: {
    fontWeight: "600",
  },
});
