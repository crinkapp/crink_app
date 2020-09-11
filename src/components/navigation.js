import React, { useState } from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import { SafeAreaView, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

// SCREENS
import MainMenu from "../screens/main-menu";
import SignIn from "../screens/sign-in";
import SignUp from "../screens/sign-up";
import Sliders from "../screens/sliders";
import Home from "../screens/home";
import Search from "../screens/search";
import Messages from "../screens/messages";
import Favoris from "../screens/favoris";
import Settings from "../screens/settings";
import Publication from "../screens/publication";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Pour vous", headerLeft: null }}
      />
      <Stack.Screen
        name="Publication"
        component={Publication}
        options={{ title: "Publication" }}
      />
    </Stack.Navigator>
  );
};

const SearchTab = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: "Rechercher", headerLeft: null }}
      />
    </Stack.Navigator>
  );
};

const MessagesTab = () => {
  return (
    <Stack.Navigator initialRouteName="Messages">
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{ title: "Messages", headerLeft: null }}
      />
    </Stack.Navigator>
  );
};

const FavorisTab = () => {
  return (
    <Stack.Navigator initialRouteName="Favoris">
      <Stack.Screen
        name="Favoris"
        component={Favoris}
        options={{ title: "Favoris", headerLeft: null }}
      />
    </Stack.Navigator>
  );
};

const SettingsTab = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Paramètres", headerLeft: null }}
      />
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "HomeScreens") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "SearchTab") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "MessagesTab") {
            iconName = focused ? "comments" : "comments";
          } else if (route.name === "FavorisTab") {
            iconName = focused ? "star" : "star";
          } else if (route.name === "SettingsTab") {
            iconName = focused ? "cog" : "cog";
          }
          return (
            <Icon name={iconName} size={22} color={color} solid={focused} />
          );
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
        name="HomeScreens"
        component={HomeScreens}
        options={{ title: "Accueil" }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchTab}
        options={{ title: "Rechercher" }}
      />
      <Tab.Screen
        name="MessagesTab"
        component={MessagesTab}
        options={{ title: "Messages" }}
      />
      <Tab.Screen
        name="FavorisTab"
        component={FavorisTab}
        options={{ title: "Favoris" }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsTab}
        options={{ title: "Paramètres" }}
      />
    </Tab.Navigator>
  );
};

// const getHeaderTitle = (route) => {
//   const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
//   switch (routeName) {
//     case "Home":
//       return "Accueil";
//     case "Publication":
//       return "Publication";
//     case "Search":
//       return "Rechercher";
//     case "Messages":
//       return "Messages";
//     case "Favoris":
//       return "Favoris";
//     case "Settings":
//       return "Paramètres";
//   }
// };

const LoginNavigation = () => {
  return (
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
    </Stack.Navigator>
  );
};

const IntroSlider = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IntroSlider"
        component={Sliders}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="LoginNavigation">
        <Stack.Screen
          name="LoginNavigation"
          component={LoginNavigation}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="IntroSlider"
          component={IntroSlider}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
