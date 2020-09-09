import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigation from "./src/components/navigation";
import { View, Text, AsyncStorage } from "react-native";
import { API_URL } from "react-native-dotenv";
import axios from "axios";
import { SafeAreaView, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Navigation
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screen
import MainMenu from "./src/screens/main-menu";
import SignIn from "./src/screens/sign-in";
import SignUp from "./src/screens/sign-up";
import Sliders from "./src/screens/sliders";
import Home from "./src/screens/home";
import Search from "./src/screens/search";
import Messages from "./src/screens/messages";
import Favoris from "./src/screens/favoris";
import Settings from "./src/screens/settings";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
//     "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
//     "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
//     "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
//   });
// };

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ConnectedRoute = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#B96C55" }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "Messages") {
              iconName = focused ? "comments" : "comments";
            } else if (route.name === "Favoris") {
              iconName = focused ? "star" : "star";
            } else if (route.name === "Settings") {
              iconName = focused ? "cog" : "cog";
            }
            return <Icon name={iconName} size={24} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: "#B96C55",
          },
          labelStyle: {
            marginBottom: 4,
          },
          inactiveTintColor: "#D3917D",
          activeTintColor: "#fff",
          showLabel: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ title: "Accueil" }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{ title: "Rechercher" }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{ title: "Messages" }}
        />
        <Tab.Screen
          name="Favoris"
          component={Favoris}
          options={{ title: "Favoris" }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Paramètres" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  switch (routeName) {
    case "Home":
      return "Accueil";
    case "Search":
      return "Rechercher";
    case "Messages":
      return "Messages";
    case "Favoris":
      return "Favoris";
    case "Settings":
      return "Paramètres";
  }
};

const NotConnectedRoute = () => {
  return (
    // <NavigationContainer>
    // <StatusBar barStyle="dark-content" />
    <Stack.Navigator initialRouteName="MainMenu" headerMode="screen">
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Se connecter", headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "S'incrire", headerShown: false }}
      />
      <Stack.Screen
        name="SliderIntro"
        component={Sliders}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: false,
          })}
        /> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

const App = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    return await axios
      .get(`${API_URL}/user`)
      .then((res) => setUser(res))
      .catch((err) => {
        // If incorrect email or password
        if (err.response) {
          setUser(false);
        } else if (err.request) {
          // Server error handling
          setUser(false);
        }
      });
  };

  useEffect(() => {
    getUser();
  });

  // if (user) {
  //   return <ConnectedRoute></ConnectedRoute>
  // } else {
  // return <NotConnectedRoute></NotConnectedRoute>
  // }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      { user ? <ConnectedRoute></ConnectedRoute> : <NotConnectedRoute></NotConnectedRoute>}
    </NavigationContainer>
  );
};

export default App;
