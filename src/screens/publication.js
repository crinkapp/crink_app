import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { API_URL, S3_URL } from "react-native-dotenv";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome5";

const Publication = (props) => {
  const [publication, setPublication] = useState(
    props.route.params.publication
  );
  const [actualUserId, setActualUserId] = useState(
    props.route.params.actualUserId
  );

  return (
    <ScrollView backgroundColor="#fff">
      <View style={styles.screen}>
        <Text style={styles.title}>{publication.title_publication}</Text>
        <View style={styles.inlineInfos}>
          <Icon
            name="heart"
            size={15}
            color={
              publication.likedByActualUser === true ? "#D55E5E" : "#CFCECE"
            }
            solid
            style={{ marginRight: 6 }}
          />
          <Text style={styles.numbers}>{publication.nbLikes}</Text>
          <Icon
            name="comment"
            size={15}
            color="#CFCECE"
            solid
            style={styles.iconSpace}
          />
          <Text style={styles.numbers}>
            <Text style={styles.likeComment}>{publication.nbComments}</Text>
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
            style={[styles.iconSpace, { marginBottom: 2 }]}
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
        {publication.path_media_publication !== null ? (
          <Image
            source={{ uri: `${S3_URL}${publication.path_media_publication}` }}
            style={styles.previewImg}
          ></Image>
        ) : (
          <View style={styles.previewNoImg}>
            <Text style={styles.titleNoImg}>
              {publication.title_publication}
            </Text>
          </View>
        )}
        <View style={styles.inlineInfos}>
          <Text style={styles.date}>Il y a 1 jour</Text>

          <View style={styles.authorSection}>
            <TouchableWithoutFeedback
              style={styles.authorSection}
              onPress={() => {
                props.navigation.navigate("Profile", {
                  user: publication.user,
                  iconPath: publication.user.path_profil_picture_user
                    ? `${S3_URL}${publication.user.path_profil_picture_user}`
                    : "https://crinksite.s3.eu-west-3.amazonaws.com/no-picture.jpg",
                  isActualUser:
                    parseInt(actualUserId) === publication.userId
                      ? true
                      : false,
                });
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
                  uri: publication.user.path_profil_picture_user
                    ? `${S3_URL}${publication.user.path_profil_picture_user}`
                    : "https://crinksite.s3.eu-west-3.amazonaws.com/no-picture.jpg",
                }}
              ></Image>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.tags}>
          {publication.hashtags.length > 0
            ? publication.hashtags.map((prop, key) => {
                return (
                  <Text style={styles.tag} key={key}>
                    #{prop.name_tag}
                  </Text>
                );
              })
            : null}
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
  titleNoImg: {
    fontWeight: "300",
    color: "#3A444C",
    fontSize: 21,
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 30,
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
  authorSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
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
  previewNoImg: {
    height: 250,
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#FAECE3",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
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
