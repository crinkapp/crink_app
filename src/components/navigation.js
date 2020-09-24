import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";
import AsyncStorage from "@react-native-community/async-storage";

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

// DIAGNOSTIC
import QuestionOne from "../screens/diagnostic/question-one";
import QuestionTwo from "../screens/diagnostic/question-two";
import QuestionThree from "../screens/diagnostic/question-three";
import QuestionFour from "../screens/diagnostic/question-four";
import QuestionFive from "../screens/diagnostic/question-five";
import QuestionSix from "../screens/diagnostic/question-six";
import QuestionSeven from "../screens/diagnostic/question-seven";
import ResultDiagnostic from "../screens/diagnostic/result-diagnostic";

// ADD PUBLICATION
import AddPublication from "../screens/add-publication";
import TitlePublication from "../screens/add-publication/publication-title";
import HashtagsPublication from "../screens/add-publication/publication-hashtags";
import ContentPublication from "../screens/add-publication/publication-content";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SmallBack = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={props.onBack}
        style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
      >
        <Icon
          name="chevron-left"
          size={25}
          style={{ marginLeft: 20, marginRight: 6 }}
          color="#3A444C"
        />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreens = () => {
  const [user, setUser] = useState({});
  const [actualUser, setActualUser] = useState({});

  const getUser = async () => {
    await axios.get(`${API_URL}user`).then((user) => {
      setUser(user.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const isActualUser = (id) => {
    if (id === user.id) {
      return true;
    }
    return false;
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <Image
              source={require("../../assets/icons/crink-icon-brown.png")}
              style={{
                height: 24,
                width: 86,
              }}
            />
          ),
          title: "Accueil",
          headerLeft: null,
          headerRight: () => (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("Profile", {
                  user,
                  isActualUser: isActualUser ? true : false,
                })
              }
            >
              <Image
                source={{
                  uri: `${S3_URL}${user.path_profil_picture_user}`,
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
        options={({ route }) => ({
          title: isActualUser(route.params.user.id)
            ? "Mon compte"
            : route.params.user.username_user,
          headerTitleStyle: { color: "black" },
          headerTintColor: "#B96C55",
          //   headerRight: isActualUser(route.params.user.id)
          //     ? () => (
          //         <TouchableWithoutFeedback>
          //           <Icon
          //             name="ellipsis-h"
          //             size={20}
          //             style={{
          //               marginRight: 20,
          //             }}
          //             color="#3A444C"
          //           />
          //         </TouchableWithoutFeedback>
          //       )
          //     : null,
        })}
      />
      <Stack.Screen
        name="QuestionOne"
        component={QuestionOne}
        options={({ navigation: { goBack } }) => ({
          title: "Question 1 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionTwo"
        component={QuestionTwo}
        options={({ navigation: { goBack } }) => ({
          title: "Question 2 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionThree"
        component={QuestionThree}
        options={({ navigation: { goBack } }) => ({
          title: "Question 3 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionFour"
        component={QuestionFour}
        options={({ navigation: { goBack } }) => ({
          title: "Question 4 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionFive"
        component={QuestionFive}
        options={({ navigation: { goBack } }) => ({
          title: "Question 5 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionSix"
        component={QuestionSix}
        options={({ navigation: { goBack } }) => ({
          title: "Question 6 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionSeven"
        component={QuestionSeven}
        options={({ navigation: { goBack } }) => ({
          title: "Question 7 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="ResultDiagnostic"
        component={ResultDiagnostic}
        options={({ navigation: { goBack } }) => ({
          title: "",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
    </Stack.Navigator>
  );
};

const SearchTab = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    await axios.get(`${API_URL}user`).then((user) => {
      setUser(user.data);
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const isActualUser = (id) => {
    if (id === user.id) {
      return true;
    }
    return false;
  };
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={({ navigation }) => ({
          headerTitle: () => (
            <SearchBar
              value
              onSubmit={(query) => {
                navigation.navigate("SearchResults", {
                  tag: { name: "Rechercher" },
                  isTag: false,
                  query
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
                  #{route.params.tag.name_tag}
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
      <Stack.Screen
        name="Publication"
        component={Publication}
        options={() => ({
          title: "Publication",
          headerTitleStyle: { color: "white" },
          headerStyle: { backgroundColor: "#B96C55" },
          headerTintColor: "white",
          headerBackTitle: "Retour",
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          title: isActualUser(route.params.user.id)
            ? "Mon compte"
            : route.params.user.username_user,
          headerTitleStyle: { color: "black" },
          headerTintColor: "#B96C55",
          headerBackTitle: "Retour",
          //   headerRight: isActualUser(route.params.user.id)
          //     ? () => (
          //         <TouchableWithoutFeedback>
          //           <Icon
          //             name="ellipsis-h"
          //             size={20}
          //             style={{
          //               marginRight: 20,
          //             }}
          //             color="#3A444C"
          //           />
          //         </TouchableWithoutFeedback>
          //       )
          //     : null,
        })}
      />
      <Stack.Screen
        name="QuestionOne"
        component={QuestionOne}
        options={({ navigation: { goBack } }) => ({
          title: "Question 1 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionTwo"
        component={QuestionTwo}
        options={({ navigation: { goBack } }) => ({
          title: "Question 2 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionThree"
        component={QuestionThree}
        options={({ navigation: { goBack } }) => ({
          title: "Question 3 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionFour"
        component={QuestionFour}
        options={({ navigation: { goBack } }) => ({
          title: "Question 4 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionFive"
        component={QuestionFive}
        options={({ navigation: { goBack } }) => ({
          title: "Question 5 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionSix"
        component={QuestionSix}
        options={({ navigation: { goBack } }) => ({
          title: "Question 6 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionSeven"
        component={QuestionSeven}
        options={({ navigation: { goBack } }) => ({
          title: "Question 7 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="ResultDiagnostic"
        component={ResultDiagnostic}
        options={({ navigation: { goBack } }) => ({
          title: "",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
    </Stack.Navigator>
  );
};

// const MessagesTab = () => {
//   return (
//     <Stack.Navigator initialRouteName="Messages">
//       <Stack.Screen
//         name="Messages"
//         component={Messages}
//         options={{ title: "Messages", headerLeft: null }}
//       />
//     </Stack.Navigator>
//   );
// };

const AddPublicationTab = () => {
  return (
    <Stack.Navigator initialRouteName="AddPublication">
      <Stack.Screen
        name="AddPublication"
        component={AddPublication}
        options={{ title: "Publier", headerLeft: null }}
      />
      <Stack.Screen
        name="TitlePublication"
        component={TitlePublication}
        options={({ navigation: { goBack } }) => ({
          title: "Étape 1 sur 3",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="HashtagsPublication"
        component={HashtagsPublication}
        options={({ navigation: { goBack } }) => ({
          title: "Étape 2 sur 3",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="ContentPublication"
        component={ContentPublication}
        options={({ navigation: { goBack } }) => ({
          title: "Étape 3 sur 3",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          title: "Mon compte",
          headerTitleStyle: { color: "black" },
          headerTintColor: "#B96C55",
          // headerRight: () => (
          //   <TouchableWithoutFeedback>
          //     <Icon
          //       name="ellipsis-h"
          //       size={20}
          //       style={{
          //         marginRight: 20,
          //       }}
          //       color="#3A444C"
          //     />
          //   </TouchableWithoutFeedback>
          // ),
        })}
      />
      <Stack.Screen
        name="QuestionOne"
        component={QuestionOne}
        options={({ navigation: { goBack } }) => ({
          title: "Question 1 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionTwo"
        component={QuestionTwo}
        options={({ navigation: { goBack } }) => ({
          title: "Question 2 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionThree"
        component={QuestionThree}
        options={({ navigation: { goBack } }) => ({
          title: "Question 3 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionFour"
        component={QuestionFour}
        options={({ navigation: { goBack } }) => ({
          title: "Question 4 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionFive"
        component={QuestionFive}
        options={({ navigation: { goBack } }) => ({
          title: "Question 5 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionSix"
        component={QuestionSix}
        options={({ navigation: { goBack } }) => ({
          title: "Question 6 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="QuestionSeven"
        component={QuestionSeven}
        options={({ navigation: { goBack } }) => ({
          title: "Question 7 sur 7",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
      />
      <Stack.Screen
        name="ResultDiagnostic"
        component={ResultDiagnostic}
        options={({ navigation: { goBack } }) => ({
          title: "",
          headerStyle: { backgroundColor: "#fff", shadowColor: "transparent" },
          headerTintColor: "#3A444C",
          headerBackTitleStyle: { fontSize: 14 },
          headerLeft: () => <SmallBack onBack={() => goBack()}></SmallBack>,
        })}
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
            iconName = "home";
          } else if (route.name === "SearchTab") {
            iconName = "search";
          } else if (route.name === "MessagesTab") {
            iconName = "comments";
          } else if (route.name === "AddPublicationTab") {
            iconName = "plus-circle";
          } else if (route.name === "FavorisTab") {
            iconName = "star";
          } else if (route.name === "SettingsTab") {
            iconName = "cog";
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
      {/* <Tab.Screen
        name="MessagesTab"
        component={MessagesTab}
        options={{ title: "Messages" }}
      /> */}
      <Tab.Screen
        name="AddPublicationTab"
        component={AddPublicationTab}
        options={{ title: "Écris une publication" }}
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
