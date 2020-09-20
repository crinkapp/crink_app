import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import globalStyle from "../../styles";

const anwsersTwo = [
  { value: "hair_texture_wavy", label: "Bouclés" },
  { value: "hair_texture_curly", label: "Ondulés" },
  { value: "hair_texture_kinky", label: "Crépus" },
];

const QuestionTwo = (props) => {
  const [diagnostic, setDiagnostic] = useState(props.route.params.diagnostic);

  return (
    <View style={globalStyle.diagnostic}>
      <View style={globalStyle.questionSection}>
        <Text style={globalStyle.questionTitle}>
          Quel type de cheveux as-tu ?
        </Text>
      </View>
      <View style={globalStyle.flexFive}>
        {anwsersTwo.map((prop, key) => {
          return (
            <TouchableOpacity
              key={key}
              onPress={() =>
                props.navigation.navigate("QuestionThree", {
                  diagnostic: {
                    ...diagnostic,
                    hair_texture_diagnostic: prop.value,
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

export default QuestionTwo;
