import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import globalStyle from "../../styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const diagnosticImg = require("../../../assets/icons/diagnostic.png");

const ResultDiagnostic = (props) => {
  const [diagnostic, setDiagnostic] = useState(props.route.params.diagnostic);

  const sendDiagnostic = async () => {
    return await axios.post(`${API_URL}/diagnostic`, diagnostic);
  };

  const onsubmit = () => {
    sendDiagnostic()
      .then(() => {
        props.navigation.popToTop();
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{flex: 1, backgroundColor: "#fff", flexDirection: "column", alignItems: "center"}}>
      <Image source={diagnosticImg} style={styles.img} />
      <View style={styles.titleSection}>
        <Text style={styles.title}>C'est terminé !</Text>
      </View>
      <Text style={styles.text}>
        Ton diagnostic a bien été enregistré. Il nous permettra de te proposer
        du contenu approprié aux besoins spécifiques de tes cheveux.
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => onsubmit()}>
        <View style={styles.btnSection}>
          <Text style={styles.btnLabel}>Terminer</Text>
          <Icon name="check" size={14} color="#fff"></Icon>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ResultDiagnostic;

const styles = StyleSheet.create({
  img: {
    marginTop: 30,
    height: 190,
    width: "58%",
    marginBottom: 30,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "#3A444C",
    fontWeight: "600",
    marginRight: 10,
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
    fontSize: 15,
    color: "#3A444C",
    fontWeight: "300",
    lineHeight: 26,
    marginHorizontal: 20,
    textAlign: "center",
  },
  btnSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#B96C55",
    paddingVertical: 10,
    paddingLeft: 24,
    paddingRight: 14,
    borderRadius: 20,
  },
  btnLabel: {
    color: "#fff",
    fontSize: 16,
    marginRight: 10,
    fontWeight: "600",
  },
});
