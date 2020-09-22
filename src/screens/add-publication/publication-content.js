import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyle from "../../styles";

const ContentPublication = (props) => {
  const [publication, setPublication] = useState(
    props.route.params.publication
  );
  return (
    <ScrollView backgroundColor="#fff">
      <View style={globalStyle.addPublicationScreen}>
        <Text style={{ color: "#3A444C", fontWeight: "300", marginBottom: 10 }}>
          Titre : <Text style={{fontStyle: "italic"}}>{publication.title}</Text>
        </Text>
        <View style={{flexDirection: "row"}}>
          <Text style={{ color: "#3A444C", fontWeight: "300", marginRight: 8 }}>
            Tags :
          </Text>
          {publication.nameTags.map((prop, key) => {
            return (
              <Text key={key} style={{ color: "#3A444C", fontWeight: "300", marginRight: 8, fontStyle: "italic" }}>
                #{prop}
              </Text>
            );
          })}
        </View>
        <Text style={styles.title}>
          Entres le contenu de ta publication
        </Text>
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
});
