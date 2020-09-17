import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import {
  SafeAreaView,
  StatusBar,
  Button,
  Image,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";

// COMPONENTS
import SearchBar from "../components/searchbar";

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
import SearchResults from "../screens/search-results";
import Profile from "../screens/profile";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const userIcon = async () => {
  let path = "https://crinksite.s3.eu-west-3.amazonaws.com/no-picture.jpg";
  return await axios.get(`${API_URL}/user`).then((user) => {
    if (user.data.path_profil_picture_user !== null) {
      path = `${S3_URL}${user.data.path_profil_picture_user}`;
      return path;
    }
    return path;
  });
};

const getCurrentUser = async () => {
  return await axios.get(`${API_URL}/user`);
};

const HomeScreens = () => {
  const [iconPath, setIconPath] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    userIcon().then((path) => {
      setIconPath(path);
    });
    getCurrentUser().then((user) => {
      setUser(user.data);
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          title: "Pour vous",
          headerLeft: null,
          headerRight: () => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Profile", { user, iconPath })}
            >
              <Image
                source={{
                  uri: `${iconPath}`,
                }}
                style={{
                  height: 34,
                  width: 34,
                  borderRadius: 34 / 2,
                  marginRight: 16,
                }}
              />
            </TouchableWithoutFeedback>
          ),
        })}
      />
      <Stack.Screen
        name="Publication"
        component={Publication}
        options={() => ({
          title: "Publication",
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#B96C55" },
          headerTintColor: "white",
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          title: "Mon compte",
          headerTitleStyle: { color: "black" },
          headerTintColor: "#B96C55",
          headerRight: () => (
            <TouchableWithoutFeedback>
              <Icon
                name="user-edit"
                size={20}
                style={{
                  marginRight: 16,
                }}
                color="#3A444C"
              />
              {/* color={color} solid={focused} */}
            </TouchableWithoutFeedback>
          ),
        })}
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
        options={({ navigation }) => ({
          headerTitle: () => (
            <SearchBar
              value
              onSubmit={() => {
                navigation.navigate("SearchResults", {
                  tag: { name: "Rechercher" },
                });
              }}
            ></SearchBar>
          ),
          headerStyle: {
            shadowColor: "transparent",
          },
          headerTitleContainerStyle: {
            width: "97%",
            height: 40,
            backgroundColor: "white",
          },
        })}
      />
      <Stack.Screen
        name="SearchResults"
        component={SearchResults}
        options={({ route }) => ({
          headerTitle: () => {
            if (route.params.tag.name !== "Rechercher") {
              return (
                <Text style={{ fontWeight: "600", fontSize: 17 }}>
                  #{route.params.tag.name}
                </Text>
              );
            } else {
              return (
                <Text style={{ fontWeight: "600", fontSize: 17 }}>
                  {route.params.tag.name}
                </Text>
              );
            }
          },
          headerBackTitle: "Retour",
          headerTintColor: "#B96C55",
          headerTitleStyle: { color: "black" },
        })}
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
            <Icon name={iconName} size={23} color={color} solid={focused} />
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
        showLabel: false,
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
