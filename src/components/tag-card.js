import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

const TagCard = () => {
  return <ImageBackground style={styles.card}></ImageBackground>;
};

const styles = StyleSheet.create({
  card: {
    height: 140,
    width: "45%",
    borderRadius: 6,
    backgroundColor: "lightblue",
    margin: 6
  },
});

export default TagCard;
