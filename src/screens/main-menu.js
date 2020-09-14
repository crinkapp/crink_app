import React from "react";
import {
  View,
  ImageBackground,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const bgImage = require("../../assets/img/pic1.png");
const crinkIcon = require("../../assets/icons/crink-logo-white.png");

export default class MainMenu extends React.Component {
  _goToSignIn = () => {
    this.props.navigation.navigate("SignIn");
  };

  _goToSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: "column"}}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.iconSection}>
            <Image source={crinkIcon} style={styles.signCrinkIcon} />
          </View>
          <View style={styles.btnSection}>
            <TouchableOpacity style={[styles.buttons, styles.signInBtn]}>
              <Button
                color="#fff"
                title="Se connecter"
                onPress={this._goToSignIn}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttons, styles.signUpBtn]}>
              <Button
                color="#3A444C"
                title="S'inscrire"
                onPress={this._goToSignUp}
              />
            </TouchableOpacity>
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
    paddingBottom: 35,
  },
  iconSection: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  signCrinkIcon: {
    height: 65,
    width: 220,
    marginBottom: 40,
  },
  btnSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  buttons: {
    padding: 10,
    marginVertical: 8,
    width: "100%",
    borderRadius: 14,
  },
  signInBtn: {
    backgroundColor: "rgba(0, 0, 0, .5)",
    borderWidth: 1,
    borderColor: "#fff",
  },
  signUpBtn: {
    backgroundColor: "#fff",
  },
});
