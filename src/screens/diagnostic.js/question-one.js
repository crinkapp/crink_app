import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const QuestionOne = (props) => {
  const [diagnostic, setDiagnostic] = useState({});
  const [locks, setLocks] = useState(null);

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
          Avez-vous des locks ?
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("QuestionTwo")}
          >
            <View style={styles.answerBtn}>
              <Text style={styles.answerLabel}>Oui</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("QuestionTwo")}
          >
            <View style={styles.answerBtn}>
              <Text style={styles.answerLabel}>Non</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuestionOne;

const styles = StyleSheet.create({
  diagnostic: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  question: {
    fontWeight: "500",
    fontSize: 24,
    color: "#3A444C",
    textAlign: "center",
  },
  answerBtn: {
    height: 45,
    width: 130,
    borderWidth: 2,
    borderColor: "#3A444C",
    borderRadius: 20,
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
