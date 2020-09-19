import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyle from "../../styles";

const anwsersFive = [
  { value: "thickness_light", label: "Fin" },
  { value: "thickness_medium", label: "Épais" },
  { value: "thickness_heavy", label: "Entre les deux" },
];

const QuestionFive = (props) => {
  const [diagnostic, setDiagnostic] = useState(props.route.params.diagnostic);

  return (
    <ScrollView
      backgroundColor="#FFF"
      contentContainerStyle={globalStyle.diagnostic}
    >
      <View style={globalStyle.questionSection}>
        <Text style={globalStyle.questionTitle}>Tu as les cheveux :</Text>
      </View>
      <View style={globalStyle.flexFive}>
        {anwsersFive.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                props.navigation.navigate("QuestionSix", {
                  diagnostic: {
                    ...diagnostic,
                    thickness_diagnostic: prop.value,
                  },
                })
              }
            >
              <View style={globalStyle.answerBtn}>
                <Text style={globalStyle.answerLabel}>{prop.label}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default QuestionFive;
