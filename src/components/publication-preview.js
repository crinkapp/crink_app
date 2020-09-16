import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { log } from "react-native-reanimated";
import { API_URL, S3_URL } from "react-native-dotenv";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";

const publicationPreview = (props) => {
  const [publication, setPublication] = useState(props.publication);

  const onLike = () => {
    const like = publication.likedByActualUser;
    return axios
      .post(`${API_URL}/add-like`, { id: publication.id })
      .then(() => {
        setPublication({
          ...publication,
          likedByActualUser: !like,
          nbLikes: like ? publication.nbLikes - 1 : publication.nbLikes + 1,
        });
      });
  };

  return (
    <View style={style.preview}>
      <TouchableWithoutFeedback
        onPress={() => props.onPress(publication)}
      >
        {publication.path_media_publication !== null ? (
          <Image
            source={{ uri: `${S3_URL}${publication.path_media_publication}` }}
            style={style.previewImg}
          ></Image>
        ) : (
          <View style={style.previewNoImg}>
            <Text style={style.titleNoImg}>
              {publication.title_publication}
            </Text>
          </View>
        )}
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={[style.infos, { alignItems: "flex-start" }]}>
          <Text style={style.title}>{publication.title_publication}</Text>
          <Icon
            name="share"
            style={{ marginLeft: "auto" }}
            size={16}
            color="#3A444C"
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={style.infos}>
        <View style={style.tags}>
          {publication.tags ? (
            publication.tags.map((prop, key) => {
              return (
                <Text style={style.tag} key={key}>
                  #{prop}
                </Text>
              );
            })
          ) : (
            <Text>…</Text>
          )}
        </View>
        <Text style={style.date}>il y a 1 jour</Text>
      </View>
      <View style={style.infos}>
        <View style={style.tags}>
          <View style={style.likeComments}>
            <Icon
              name="heart"
              size={16}
              color={
                publication.likedByActualUser === true ? "#D55E5E" : "#CFCECE"
              }
              solid
              onPress={() => onLike()}
            />
            {publication.nbLikes ? (
              <Text style={style.likeComment}>{publication.nbLikes}</Text>
            ) : null}
          </View>
          <View style={style.likeComments}>
            <Icon name="comment" size={16} color="#CFCECE" solid />
            {publication.nbComments ? (
              <Text style={style.likeComment}>{publication.nbComments}</Text>
            ) : null}
          </View>
          <View style={style.likeComments}>
            <Icon name="clock" size={16} color="#CFCECE" />
            <Text style={style.likeComment}>
              {publication.time_to_read_publication ? (
                publication.time_to_read_publication
              ) : (
                <Text>…</Text>
              )}{" "}
              min
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={style.username}>
            par{" "}
            {publication.user.username_user ? (
              publication.user.username_user
            ) : (
              <Text>…</Text>
            )}
          </Text>
          <Image
            style={style.userIcon}
            source={{
              uri: publication.user.path_profil_picture_user
                ? `${S3_URL}${publication.user.path_profil_picture_user}`
                : "https://crinksite.s3.eu-west-3.amazonaws.com/no-picture.jpg",
            }}
          ></Image>
        </View>
      </View>
    </View>
  );
};

export default publicationPreview;

const style = StyleSheet.create({
  preview: {
    // flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    width: "100%",
    marginVertical: 10,
    paddingBottom: 15,
    borderRadius: 4,
  },
  previewImg: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  previewNoImg: {
    height: 150,
    width: "100%",
    backgroundColor: "#FAECE3",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  infos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontWeight: "500",
    color: "#3A444C",
    width: "80%",
  },
  titleNoImg: {
    fontWeight: "300",
    color: "#3A444C",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
    lineHeight: 30,
  },
  tags: {
    flexDirection: "row",
    alignItems: "center",
  },
  tag: {
    marginRight: 6,
    color: "#B96C55",
    fontWeight: "300",
  },
  date: {
    fontStyle: "italic",
    fontSize: 12,
    fontWeight: "300",
    color: "#3A444C",
  },
  likeComments: {
    flexDirection: "row",
    marginRight: 10,
  },
  likeComment: {
    color: "#3A444C",
    fontWeight: "500",
    marginLeft: 5,
    fontSize: 11,
  },
  username: {
    fontWeight: "500",
    fontSize: 12,
    marginRight: 6,
  },
  userIcon: {
    height: 22,
    width: 22,
    borderRadius: 22 / 2, // Round circle
  },
});
