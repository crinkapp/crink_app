import React, { useState } from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import { SafeAreaView, StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

// SCREENS
import MainMenu from "../src/screens/main-menu";
import SignIn from "../src/screens/sign-in";
import SignUp from "../src/screens/sign-up";
import Sliders from "../src/screens/sliders";
import Home from "../src/screens/home";
import Search from "../src/screens/search";
import Messages from "../src/screens/messages";
import Favoris from "../src/screens/favoris";
import Settings from "../src/screens/settings";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
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
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Favoris" component={Favoris} />
        <Tab.Screen name="Settings" component={Settings} />
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

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
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
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerLeft: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
