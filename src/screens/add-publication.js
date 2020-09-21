import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import globalStyle from "../styles";
import { S3_URL } from "react-native-dotenv";

const addImage = require("../../assets/icons/add-publication.png")

const AddPublication = (props) => {
  return (
    <View style={globalStyle.appScreen}>
      <Image source={addImage} style={styles.img} />
      <Text style={styles.text}>Tu souhaites partager du contenu ?</Text>
      <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnLabel}>Créer une publication</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPublication;

const styles = StyleSheet.create({
  img: {
    height: 260,
    width: "100%",
    marginVertical: 40,
    resizeMode: "cover",
  },
  text: {
      color: "#3A444C",
      fontSize: 16,
      fontWeight: "300"
  },
  btn: {
      marginTop: 50,
      backgroundColor: "#5DAF79",
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8
  },
  btnLabel: {
      color: "#fff",
      fontSize: 14
  }
});
