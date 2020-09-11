import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigation from "./src/components/navigation";
import { AsyncStorage } from "react-native";
import { API_URL } from "react-native-dotenv";
import axios from "axios";

// import Navigation from "./src/components/navigation";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
//     "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
//     "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
//     "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
//   });
// };

const App = () => {
  // const [dataLoaded, setDataLoaded] = useState(false);

  // // Family font fetch
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //     />
  //   );
  // }

  const [user, setUser] = useState({});

  const getUser = () => {
    return axios
      .get(`${API_URL}/user`)
      .then((res) => {
        setUser(res.data.email_user);
      })
      .catch((err) => {
        // If incorrect email or password
        if (err.request) {
          setUser(false);
        }
      });
  };

  useEffect(() => {
    // getUser();
    // console.log(`User : ${JSON.stringify(user)}`);
    const id = AsyncStorage.getItem("userId");
    id.then((res) => console.log(res));
  }, []);

  // if (user) {
  //   return <ConnectedRoute></ConnectedRoute>
  // } else {
  // return <NotConnectedRoute></NotConnectedRoute>
  // }

  return <Navigation></Navigation>;
  // <NavigationContainer>
  //   <StatusBar barStyle="dark-content" />
  //   {user.id ? (
  //     <ConnectedRoute></ConnectedRoute>
  //   ) : (
  //     <NotConnectedRoute></NotConnectedRoute>
  //   )}
  // </NavigationContainer>
};

export default App;
