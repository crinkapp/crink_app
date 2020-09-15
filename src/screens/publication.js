import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { API_URL, S3_URL } from "react-native-dotenv";
import Icon from "react-native-vector-icons/FontAwesome5";

const Publication = (props) => {
  const testingTags = [
    "shampoing",
    "bouclés",
    "conseil",
    "soins",
    "casses",
    "cheveux",
    "crépus",
  ];

  const publication = props.route.params.publication;
  return (
    <ScrollView backgroundColor="#fff">
      <View style={styles.screen}>
        <Text style={styles.title}>{publication.title_publication}</Text>
        <View style={styles.inlineInfos}>
          <Icon
            name="heart"
            size={15}
            color="#D55E5E"
            solid
            style={{ marginRight: 6 }}
          />
          <Text style={styles.numbers}>
            {publication.likes ? publication.likes : <Text>21k</Text>}
          </Text>
          <Icon
            name="comment"
            size={15}
            color="#CFCECE"
            solid
            style={styles.iconSpace}
          />
          <Text style={styles.numbers}>
            {publication.likes ? publication.likes : <Text>498</Text>}
          </Text>
          <Icon
            name="clock"
            size={15}
            color="#CFCECE"
            style={styles.iconSpace}
          />
          <Text style={styles.numbers}>
            {publication.time_to_read_publication ? (
              publication.time_to_read_publication
            ) : (
              <Text>…</Text>
            )}{" "}
            min
          </Text>
          <Icon
            name="star"
            size={15}
            color="#F8BA00"
            solid
            style={styles.iconSpace}
          />
          <Text style={styles.numbers}>
            {publication.time ? publication.time : <Text>favoris</Text>}
          </Text>
          <Icon
            name="share"
            size={15}
            color="#3A444C"
            solid
            style={{ marginLeft: "auto" }}
          />
        </View>
        <Image
          source={{ uri: `${S3_URL}/${publication.path_media_publication}` }}
          style={styles.previewImg}
        ></Image>
        <View style={styles.inlineInfos}>
          <Text style={styles.date}>Il y a 1 jour</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <Text style={styles.username}>
              par{" "}
              {publication.user.username_user ? (
                publication.user.username_user
              ) : (
                <Text>…</Text>
              )}
            </Text>
            <Image
              style={styles.userIcon}
              source={{
                uri: `${S3_URL}/${publication.user.path_profil_picture_user}`,
              }}
            ></Image>
          </View>
        </View>
        <View style={styles.tags}>
          {testingTags ? (
            testingTags.map((prop, key) => {
              return (
                <Text style={styles.tag} key={key}>
                  #{prop}
                </Text>
              );
            })
          ) : (
            <Text>…</Text>
          )}
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text>{publication.content_publication}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Publication;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
    color: "#000",
    // color: "#3A444C"
  },
  iconSpace: {
    marginLeft: 12,
    marginRight: 6,
  },
  inlineInfos: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  numbers: {
    color: "#3A444C",
    fontSize: 11,
  },
  previewImg: {
    height: 250,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 4,
  },
  date: {
    fontStyle: "italic",
    fontSize: 12,
    fontWeight: "300",
    color: "#3A444C",
  },
  username: {
    fontWeight: "500",
    fontSize: 12,
    marginRight: 6,
  },
  userIcon: {
    height: 25,
    width: 25,
    borderRadius: 25 / 2, // Round circle
  },
  tags: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    marginBottom: 15,
  },
  tag: {
    marginRight: 6,
    color: "#B96C55",
  },
  mainContent: {},
});
