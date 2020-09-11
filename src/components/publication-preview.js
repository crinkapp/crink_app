import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { log } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome5";

const publicationPreview = (props) => {
  return (
    <View style={style.preview}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={{ uri: props.path_media_publication }}
          style={style.previewImg}
        ></Image>
      </TouchableOpacity>
      <View style={[style.infos, { alignItems: "flex-start" }]}>
        <Text style={style.title}>{props.title_publication}</Text>
        <Icon
          name="share"
          style={{ marginLeft: "auto" }}
          size={16}
          color="#3A444C"
        />
      </View>
      <View style={style.infos}>
        <View style={style.tags}>
          {props.tags ? (
            props.tag.map((prop, key) => {
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
            <Icon name="heart" size={16} color="#D55E5E" solid />
            <Text style={style.likeComment}>
              {props.likes ? props.likes : <Text>…</Text>}
            </Text>
          </View>
          <View style={style.likeComments}>
            <Icon name="comment" size={16} color="#CFCECE" solid />
            <Text style={style.likeComment}>
              {props.comments ? props.comments : <Text>…</Text>}
            </Text>
          </View>
          <View style={style.likeComments}>
            <Icon name="clock" size={16} color="#CFCECE" />
            <Text style={style.likeComment}>
              {props.time_to_read_publication ? props.time_to_read_publication : <Text>…</Text>} min
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={style.username}>
            par {props.username_user ? props.username_user : <Text>…</Text>}
          </Text>
          <Image
            style={style.userIcon}
            source={{ uri: props.path_profil_picture_user ? props.path_profil_picture_user : <Text>…</Text> }}
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
  },
  previewImg: {
    height: 150,
    width: "100%",
    resizeMode: "cover",
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
