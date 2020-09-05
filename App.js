import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, View, Text, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { AppLoading } from "expo";

// Screens
import SignIn from "./src/screens/sign-in";
import SignUp from "./src/screens/sign-up";
import Sliders from "./src/screens/sliders";
import Home from "./src/screens/home";

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });
};

const Stack = createStackNavigator();

export function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  // Family font fetch
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Connexion", headerLeft: null }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Inscription", headerLeft: null }}
        />
        <Stack.Screen
          name="SliderIntro"
          component={Sliders}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Accueil", headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
