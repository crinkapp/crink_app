import React from "react";
import { Text, StyleSheet, ImageBackground, Dimensions } from "react-native";

const TagCard = (props) => {
  return (
    <ImageBackground
      style={styles.card}
      imageStyle={{ borderRadius: 4 }}
      source={{ uri: props.image }}
    >
      <Text style={styles.text}>#{props.name}</Text>
    </ImageBackground>
  );
};

const rows = 4;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width =
  Dimensions.get("window").width / cols - marginHorizontal * (cols + 1);
const height =
  Dimensions.get("window").height / rows - marginVertical * (rows + 1);

const styles = StyleSheet.create({
  card: {
    marginTop: marginVertical,
    marginBottom: marginVertical,
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
  },
});

export default TagCard;
