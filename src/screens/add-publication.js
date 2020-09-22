import React, { useDebugValue, useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import globalStyle from "../styles";
import { API_URL, S3_URL } from "react-native-dotenv";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";

// const addImage = require("../../assets/icons/add-publication.png")
const addImage = require("../../assets/icons/collaboration.png");

const AddPublication = (props) => {
  const [roleUser, setRoleUser] = useState("");

  const getCurrentUser = async () => {
    return await axios.get(`${API_URL}/user`);
  };

  useEffect(() => {
    getCurrentUser().then((user) => {
      setRoleUser(user.data.role_user);
    });
  }, []);

  return (
    <View style={globalStyle.appScreen}>
      <Image source={addImage} style={styles.img} />
      {roleUser === "User" ? (
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.text}>
            Pour l'instant nous réservons cette fonctionnalité exclusivement aux
            membres
            <Text style={{ fontWeight: "500" }}> certifiés</Text>
            <Text style={{ color: "#fff" }}> </Text>
              <Icon name="certificate" color="#379EE5" size={16} />
          </Text>

          <Text style={styles.text}>
            Vous pourrez néanmoins publier vos témoignages très prochainement !
          </Text>
        </View>
      ) : (
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Text style={styles.text}>
            Tu souhaites publier un article, partages tes connaissances dès maintenant en 3 étapes.
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("TitlePublication")}
          >
            <Text style={styles.btnLabel}>Créer une publication</Text>
          </TouchableOpacity>
        </View>
      )}
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
    fontWeight: "300",
    marginVertical: 8,
    textAlign: "center",
    lineHeight: 26,
  },
  btn: {
    marginTop: 12,
    backgroundColor: "#5DAF79",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnLabel: {
    color: "#fff",
    fontSize: 14,
  },
});
