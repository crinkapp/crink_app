import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import globalStyle from "../styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";

const Profile = (prop) => {
  const [user, setUser] = useState(prop.route.params.user);
  const [isActualUser, setIsActualUser] = useState(
    prop.route.params.isActualUser
  );
  return (
    <ScrollView>
      <View style={[globalStyle.appScreen, styles.header]}>
        <Image
          source={{ uri: prop.route.params.iconPath }}
          style={styles.image}
        ></Image>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 12 }}
        >
          <Text style={styles.username}>{user.username_user}</Text>
          <Icon name="certificate" size={16} color="#379EE5" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={[styles.subscribeBtn, styles.btn]}>
            <Text style={styles.subscribeLabel}>S'abonner</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.messageBtn, styles.btn]}>
            <Icon name="paper-plane" size={12} color="#fff" solid />
            <Text style={styles.messageLabel}>Message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statsView}>
          <View style={styles.stats}>
            <Text style={styles.numbers}>12</Text>
            <Text style={styles.statsLabel}>ARTICLES</Text>
          </View>
          <View style={styles.separationBorder}></View>
          <View style={styles.stats}>
            <Text style={styles.numbers}>8,1 M</Text>
            <Text style={styles.statsLabel}>ABONNÉS</Text>
          </View>
          <View style={styles.separationBorder}></View>
          <View style={styles.stats}>
            <Text style={styles.numbers}>34</Text>
            <Text style={styles.statsLabel}>ABONNEMENTS</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text color="#3A444C">:)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowOffset: {
      width: 0, // x
      height: 6, // y
    },
    shadowRadius: 5,
    shadowOpacity: 0.1,
    shadowColor: "#3A444C",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    resizeMode: "center",
  },
  username: {
    fontSize: 16,
    marginRight: 6,
    color: "#3A444C",
  },
  stats: {
    marginHorizontal: 25,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 110,
  },
  numbers: {
    fontSize: 13,
    marginBottom: 4,
    fontWeight: "600",
    color: "#3A444C",
  },
  statsView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
    width: "100%",
  },
  statsLabel: {
    fontSize: 9,
    color: "#ABABAB",
  },
  separationBorder: {
    borderLeftWidth: 0.6,
    borderLeftColor: "#ABABAB",
  },
  btn: {
    marginTop: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#3A444C",
    borderRadius: 6,
  },
  subscribeBtn: {
    paddingHorizontal: 4,
  },
  messageBtn: {
    marginBottom: 8,
    marginLeft: 10,
    backgroundColor: "#3A444C",
    borderRadius: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  subscribeLabel: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: "#3A444C",
    textAlign: "center",
  },
  messageLabel: {
    fontSize: 12,
    paddingVertical: 6,
    color: "#fff",
    textAlign: "center",
    marginLeft: 6,
  },
});

export default Profile;
