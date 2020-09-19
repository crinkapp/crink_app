import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import globalStyle from "../../styles";

const anwsersThree = [
  { value: "porosity_low", label: "- 10 min" },
  { value: "porosity_normal", label: "10 à 20 min" },
  { value: "porosity_high", label: "+ 20 min" },
];

const QuestionThree = (props) => {
  const [diagnostic, setDiagnostic] = useState(props.route.params.diagnostic);

  return (
    <View style={globalStyle.diagnostic}>
      <View style={globalStyle.questionSection}>
        <Text style={globalStyle.questionTitle}>
          Combien de temps faut-il à tes cheveux pour sécher une fois mouillé ?
        </Text>
      </View>
      <View style={globalStyle.flexFive}>
        {anwsersThree.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                props.navigation.navigate("QuestionFour", {
                  diagnostic: {
                    ...diagnostic,
                    porosity_diagnostic: prop.value,
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
    </View>
  );
};

export default QuestionThree;
