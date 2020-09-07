import React, { Component } from "react";
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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import DismissKeyboard from "../../components/dismiss-keyboard";

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
      error: false,
      errorMsg: "",
      isLoading: false,
    };
  }

  _goToSlider = () => {
    this.props.navigation.navigate("SliderIntro");
  };

  _goToSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };

  render() {
    return (
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
              { borderColor: this.state.error ? "#D55E5E" : "#FDFDFD" },
            ]}
            clearButtonMode="always"
            placeholderTextColor="#3A444C"
            placeholder="Nom d'utilisateur"
            autoCompleteType="off"
            autoCapitalize="none"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />
          <TextInput
            style={[
              globalStyle.signInputText,
              { borderColor: this.state.error ? "#D55E5E" : "#FDFDFD" },
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
              { borderColor: this.state.error ? "#D55E5E" : "#FDFDFD" },
            ]}
            autoCompleteType="off"
            secureTextEntry={true}
            placeholderTextColor="#3A444C"
            placeholder="Mot de passe"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
          {/* {this.onError()} */}
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
            <Text style={styles.smText}>Vous avez déjà un compte ? <Text style={styles.textBold}> Se connecter </Text></Text>
          </TouchableOpacity>
          <Text style={styles.cgu}>
            En vous inscrivant, vous approuvez nos
            <Text style={styles.textBold}> Conditions d'utilisation </Text>
            et notre
            <Text style={styles.textBold}> Politique de Confidentialité</Text>.
          </Text>
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
