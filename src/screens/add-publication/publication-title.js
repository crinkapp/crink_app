import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyle from "../../styles";
import DismissKeyboard from "../../components/dismiss-keyboard";
import Icon from "react-native-vector-icons/FontAwesome5";

const TitlePublication = (props) => {
  const [title, setTitle] = useState("");

  const onNext = () => {
    props.navigation.navigate("HashtagsPublication", {
      publication: { title },
    });
  };

  return (
    <DismissKeyboard>
      <View style={globalStyle.addPublicationScreen}>
        <Text style={styles.title}>Quel sera le titre de ta publication ?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          value={title}
          placeholder="Entres le titre de ta publication"
          multiline={true}
          maxLength={255}
        />
        <TouchableOpacity style={styles.nextBtn} onPress={() => onNext()}>
          <Text style={styles.nextLabel}>Suivant</Text>
          <Icon name="forward" size={14} color="#fff" />
        </TouchableOpacity>
      </View>
    </DismissKeyboard>
  );
};

export default TitlePublication;

const styles = StyleSheet.create({
  title: {
    marginTop: 70,
    fontSize: 22,
    color: "#3A444C",
    fontWeight: "600",
  },
  textInput: {
    width: "100%",
    paddingVertical: 6,
    marginTop: 20,
    borderRadius: 4,
    fontSize: 20,
  },
  nextBtn: {
    marginTop: 45,
    width: "100%",
    backgroundColor: "#3A444C",
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nextLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    marginRight: 10,
  },
});
