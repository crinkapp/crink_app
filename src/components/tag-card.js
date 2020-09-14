import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

const TagCard = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <ImageBackground
        style={styles.card}
        imageStyle={{ borderRadius: 4 }}
        source={{ uri: props.image }}
      >
        <Text style={styles.text} onPress={props.onPress}>
          #{props.name}
        </Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
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
