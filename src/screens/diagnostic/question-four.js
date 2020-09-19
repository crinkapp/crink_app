import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyle from "../../styles";

const anwsersFour = [
  { value: "density_low", label: "Oui facilement" },
  { value: "density_normal", label: "Oui difficilement" },
  { value: "density_high", label: "Non pas vraiment" },
];

const QuestionFour = (props) => {
  const [diagnostic, setDiagnostic] = useState(props.route.params.diagnostic);

  return (
    <ScrollView
      backgroundColor="#FFF"
      contentContainerStyle={globalStyle.diagnostic}
    >
      <View style={globalStyle.questionSection}>
        <Text style={globalStyle.questionTitle}>
          En séparant tes cheveux, vois-tu ton cuir chevelu ?
        </Text>
      </View>
      <View style={globalStyle.flexFive}>
        {anwsersFour.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                props.navigation.navigate("QuestionFive", {
                  diagnostic: {
                    ...diagnostic,
                    density_diagnostic: prop.value,
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

export default QuestionFour;
