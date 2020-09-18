import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";

const QuestionThree = (diagnostic) => {
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
          Quel est votre porosité ?
        </Text>
      </View>
      <View style={{ flex: 5 }}>
        <TouchableWithoutFeedback>
          <View style={styles.answerBtn}>
            <Text style={[styles.answerLabel, { alignSelf: "stretch" }]}>
              Faible
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.answerBtn}>
            <Text style={[styles.answerLabel, { alignSelf: "stretch" }]}>
              Moyenne
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.answerBtn}>
            <Text style={[styles.answerLabel, { alignSelf: "stretch" }]}>
              Élevée
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default QuestionThree;

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
