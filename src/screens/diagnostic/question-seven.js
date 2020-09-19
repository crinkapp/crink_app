import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyle from "../../styles";

const anwsersSeven = [
  { value: "distance_between_curls_loose", label: "Espacées" },
  { value: "distance_between_curls_medium", label: "Moyennement espacées" },
  { value: "distance_between_curls_tight", label: "Rapprochées" },
  { value: "distance_between_curls_very_tight", label: "Très rapprochées" },
];

const QuestionSeven = (props) => {
  const [diagnostic, setDiagnostic] = useState(props.route.params.diagnostic);

  const onFinish = (value) => {
    setDiagnostic({
      diagnostic: {
        ...diagnostic,
        distance_between_curls_diagnostic: value,
      },
    });
    console.log(diagnostic);
  };

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
        {anwsersSeven.map((prop, key) => {
          return (
            <TouchableOpacity key={key} onPress={() => onFinish(prop.value)}>
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

export default QuestionSeven;
