import React, { Component, useEffect, useState } from "react";
import { View, Image, Text, StyleSheet, ActivityIndicator, AsyncStorage } from "react-native";
import globalStyle from "../styles";
import TagCard from "../components/tag-card";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";

const Search = (props) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [actualUserId, setActualUserId] = useState(null);

  const getAllTags = async () => {
    setLoading(true);
    return await axios
      .get(`${API_URL}tags`)
      .then((res) => {
        setTags(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllTags();
    AsyncStorage.getItem("user_id").then((actualUserId) => {
      setActualUserId(actualUserId);
    });
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <ActivityIndicator size="large" color="#B96C55" />
      </View>
    );
  } else {
    return (
      <ScrollView backgroundColor="#fff">
        <View style={styles.screen}>
          <View style={styles.cardsView}>
            {tags.length > 0 ? (
              tags.map((prop, key) => {
                return (
                  <TagCard
                    key={key}
                    name={prop.name_tag}
                    image={`${S3_URL}${prop.path_image}`}
                    onPress={() => {
                      props.navigation.navigate("SearchResults", {
                        tag: prop,
                        isTag: true,
                        userId: actualUserId
                      });
                    }}
                  ></TagCard>
                );
              })
            ) : (
              <Text style={styles.text}>
                Il n'y pas de catégorie pour l'instant
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
};

export default Search;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingTop: 30,
    paddingBottom: 5,
    backgroundColor: "white",
  },
  input: {
    fontSize: 16,
  },
  cardsView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
