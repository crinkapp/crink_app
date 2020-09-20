import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import globalStyle from "../../styles";

const anwsersOne = [
  { value: true, label: "Oui" },
  { value: false, label: "Non" },
];

const QuestionOne = (props) => {
  return (
    <View style={globalStyle.diagnostic}>
      <View style={globalStyle.questionSection}>
        <Text style={globalStyle.questionTitle}>As-tu des locks ?</Text>
      </View>
      <View style={globalStyle.flexFive}>
        <View style={globalStyle.answerSection}>
          {anwsersOne.map((prop, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() =>
                  props.navigation.navigate("QuestionTwo", {
                    diagnostic: {
                      locks_diagnostic: prop.value,
                    },
                  })
                }
              >
                <View style={styles.answerBtn}>
                  <Text style={globalStyle.answerLabel}>{prop.label}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default QuestionOne;

const styles = StyleSheet.create({
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
});
