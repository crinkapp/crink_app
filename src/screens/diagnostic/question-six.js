import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyle from "../../styles";

const anwsersSix = [
  { value: "curl_pattern_o", label: "En forme de O" },
  { value: "curl_pattern_s", label: "En forme de S" },
  { value: "curl_pattern_z", label: "En forme de Z" },
  { value: "curl_pattern_l", label: "En forme de L" },
];

const QuestionSix = (props) => {
  const [diagnostic, setDiagnostic] = useState(props.route.params.diagnostic);

  return (
    <ScrollView
      backgroundColor="#FFF"
      contentContainerStyle={globalStyle.diagnostic}
    >
      <View style={globalStyle.questionSection}>
        <Text style={globalStyle.questionTitle}>
          Observe un de tes cheveux : quelle forme a-t-il ?
        </Text>
      </View>
      <View style={globalStyle.flexFive}>
        {anwsersSix.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                props.navigation.navigate("QuestionSeven", {
                  diagnostic: {
                    ...diagnostic,
                    curl_pattern_diagnostic: prop.value,
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

export default QuestionSix;
