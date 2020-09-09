import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const publicationPreview = (props) => {
  return (
    <View style={style.preview}>
      <Image source={props.image} style={style.previewImg}></Image>
      <View style={style.infos}>
        <Text style={style.title}>{props.title}</Text>
        <Icon name="share" size={16} color="#3A444C" />
      </View>
      <View style={style.infos}>
        <View style={style.tags}>
          {props.tags.map((prop, key) => {
            return (
              <Text style={style.tag} key={key}>
                #{prop}
              </Text>
            );
          })}
        </View>
        <Text style={style.date}>il y a 1 jour</Text>
      </View>
      <View style={style.infos}>
        <View style={style.tags}>
          <View style={style.likeComments}>
            <Icon name="heart" size={16} color="#D55E5E" />
            <Text style={style.likeComment}>{props.likes}</Text>
          </View>
          <View style={style.likeComments}>
            <Icon name="comment" size={16} color="#CFCECE" />
            <Text style={style.likeComment}>{props.comments}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={style.username}>par {props.username}</Text>
          <Image style={style.userIcon} source={props.userIcon}></Image>
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
    backgroundColor: "lightblue",
    height: 150,
    width: "100%",
    resizeMode: "center",
  },
  infos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontWeight: "500",
    color: "#3A444C",
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
    fontSize: 13,
  },
  username: {
    fontWeight: "600",
    fontSize: 13,
    marginRight: 6,
  },
  userIcon: {
      height: 25,
      width: 25,
      borderRadius: 25/2 // Round circle
  }
});
