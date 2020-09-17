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
      <View
        style={[
          globalStyle.appScreen,
          {
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
        ]}
      >
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
        <TouchableOpacity style={styles.subscribeBtn}>
          <Text style={styles.subscribeLabel}>S'abonner</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 20,
            width: "100%",
          }}
        >
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
  statsLabel: {
    fontSize: 9,
    color: "#ABABAB",
  },
  separationBorder: {
    borderLeftWidth: 0.6,
    borderLeftColor: "#ABABAB",
  },
  subscribeBtn: {
    marginTop: 20,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#3A444C",
    borderRadius: 10,
  },
  subscribeLabel: {
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: "#3A444C",
  },
});

export default Profile;
