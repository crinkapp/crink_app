import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigation from "./components/navigation"

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-black": require("./assets/fonts/Montserrat-Black.ttf"),
    "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });
};

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

  return <Navigation></Navigation>
}

export default App;
