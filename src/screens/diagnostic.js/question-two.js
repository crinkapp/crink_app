import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const QuestionTwo = (props) => {
  const [locks, setLocks] = useState(false);
  return (
    <View style={styles.diagnostic}>
      <View
        style={{
          flex: 3,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text style={[styles.question, { marginTop: 35 }]}>
          Quel type de cheveux avez-vous ?
        </Text>
      </View>
      <View style={{ flex: 5 }}>
        <TouchableOpacity onPress={() => props.navigation.navigate("QuestionThree")}>
          <View style={styles.answerBtn}>
            <Text style={[styles.answerLabel, { alignSelf: "stretch" }]}>
              Bouclés
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("QuestionThree")}>
          <View style={styles.answerBtn}>
            <Text style={[styles.answerLabel, { alignSelf: "stretch" }]}>
              Ondulés
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("QuestionThree")}>
          <View style={styles.answerBtn}>
            <Text style={[styles.answerLabel, { alignSelf: "stretch" }]}>
              Crépus
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionTwo;

const styles = StyleSheet.create({
  diagnostic: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  question: {
    fontWeight: "500",
    fontSize: 24,
    color: "#3A444C",
    textAlign: "center"
  },
  answerBtn: {
    height: 45,
    borderWidth: 2,
    borderColor: "#3A444C",
    borderRadius: 20,
    marginBottom: 30,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  answerLabel: {
    color: "#3A444C",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
