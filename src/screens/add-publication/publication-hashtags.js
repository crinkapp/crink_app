import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import globalStyle from "../../styles";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";

const HashtagsPublication = (props) => {
  const [publication, setPublication] = useState(
    props.route.params.publication
  );
  const [tags, setTags] = useState([]);

  const getUsers = async () => {
    return await axios.get(`${API_URL}/users`).then((res) => console.log(res.data));
  };

//   useEffect(() => {
//     getUsers();
//   }, []);

  return (
    <View style={globalStyle.addPublicationScreen}>
      <Text>Titre de la publication : {publication.title}</Text>
      <Text style={styles.title}>
        Choisis les tags qui concernent ta publication :
      </Text>
      <View style={{ marginVertical: 70 }}>
        {tags.map((prop, key) => {
          <Text key={key}>{prop.name_tag}</Text>;
        })}
      </View>
    </View>
  );
};

export default HashtagsPublication;

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
