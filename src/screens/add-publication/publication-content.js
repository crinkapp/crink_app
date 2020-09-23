import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyle from "../../styles";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

const ContentPublication = (props) => {
  const [publication, setPublication] = useState(
    props.route.params.publication
  );
  const [nameTags, setNameTags] = useState(
    props.route.params.publication.nameTags
  );
  const [content, setContent] = useState("");

  const addPublication = async (newPublication) => {
    return await axios.post(`${API_URL}/add-publication`, newPublication);
  };

  const onSave = async () => {
    const newPublication = {
      title: publication.title,
      hashtags: publication.hashtags,
      content,
    };
    await addPublication(newPublication)
      .then(() => {
        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: "HomeTabs",
            },
          ],
        });
      })
      .catch((err) => console.log(err));
  };

  const ConfirmBtn = () => {
    Alert.alert(
      "Prêt à être publié ?",
      "Tu pourras le modifier ultérieurement",
      [
        {
          text: "Confirmer",
          onPress: () => onSave(),
        },
        {
          text: "Annuler",
          onPress: () => console.log("Annuler"),
          style: "cancel",
        },
      ]
    );
  };

  useEffect(() => {
    props.navigation.setParams({
      publication: {
        title: publication.title,
        hashtags: publication.hashtags,
        content,
      },
    });
  }, []);

  return (
    <ScrollView backgroundColor="#fff">
      <View style={globalStyle.addPublicationScreen}>
        <Text style={{ color: "#3A444C", fontWeight: "300", marginBottom: 10 }}>
          Titre : <Text style={{ fontWeight: "500" }}>{publication.title}</Text>
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ color: "#3A444C", fontWeight: "300", marginRight: 8 }}>
            Tags :
          </Text>
          {nameTags.map((prop, key) => {
            return (
              <Text
                key={key}
                style={{
                  color: "#B96C55",
                  fontWeight: "500",
                  marginRight: 8,
                }}
              >
                #{prop}
              </Text>
            );
          })}
        </View>
        <Text style={styles.title}>Entres le contenu de ta publication</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setContent(text)}
          value={content}
          placeholder="Commences à écrire…"
          multiline={true}
          //   onBlur={() => setContent(content)}
        />
        <TouchableOpacity style={styles.submitBtn} onPress={() => ConfirmBtn()}>
          <Text style={styles.submitLabel}>Enregistrer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ContentPublication;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 22,
    color: "#3A444C",
    fontWeight: "600",
  },
  textInput: {
    width: "100%",
    paddingVertical: 6,
    marginTop: 20,
    borderRadius: 4,
    fontSize: 16,
  },
  submitBtn: {
    alignSelf: "center",
    marginTop: 100,
    backgroundColor: "#5DAF79",
    width: "100%",
    borderRadius: 8,
  },
  submitLabel: {
    color: "#fff",
    padding: 10,
    textAlign: "center",
    fontSize: 16,
  },
});
