import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import globalStyle from "../styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";
import { set } from "react-native-reanimated";

const Profile = (prop) => {
  const [user, setUser] = useState(prop.route.params.user);
  const [isActualUser, setIsActualUser] = useState(prop.route.params.isActualUser);

  const onSubscribe = async () => {
    return await axios
      .post(`${API_URL}/add-subscribe`, { id: user.id })
      .then(async () => await onUpdate());
  };

  const onUpdate = async () => {
    return await axios
      .post(`${API_URL}/user-by-id`, {
        id_user: user.id,
      })
      .then((res) => setUser(res.data));
  };

  useEffect(() => {
    onUpdate();
  }, []);

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
          <Icon name="certificate" size={14} color="#379EE5" style={{marginTop: 2}} />
        </View>
        {!isActualUser ? (
          <View style={{ flexDirection: "row" }}>
            {user.alreadySubscribed ? (
              <TouchableOpacity
                style={[styles.alreadySubscribeBtn, styles.btn, styles.outlineBtn]}
                onPress={() => onSubscribe()}
              >
                <Icon name="check" size={12} color="#B96C55" solid />
                <Text style={[styles.alreadySubscribeLabel, styles.outlineLabel]}>Abonné</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.subscribeBtn, styles.btn]}
                onPress={() => onSubscribe()}
              >
                <Text style={styles.subscribeLabel}>S'abonner</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={[styles.messageBtn, styles.btn, styles.outlineBtn]}>
              <Icon name="paper-plane" size={12} color="#fff" solid />
              <Text style={[styles.messageLabel, styles.outlineLabel]}>Message</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <View style={styles.statsView}>
          <View style={styles.stats}>
            <Text style={styles.numbers}>{user.nbPublications}</Text>
            <Text style={styles.statsLabel}>PUBLICATIONS</Text>
          </View>
          <View style={styles.separationBorder}></View>
          <View style={styles.stats}>
            <Text style={styles.numbers}>{user.nbSubscribers}</Text>
            <Text style={styles.statsLabel}>ABONNÉS</Text>
          </View>
          <View style={styles.separationBorder}></View>
          <View style={styles.stats}>
            <Text style={styles.numbers}>{user.nbSubscription}</Text>
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
    fontSize: 18,
    fontWeight: "500",
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
    fontWeight: "700",
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
    marginTop: 18,
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 6,
    width: 100
  },
  outlineBtn: {
    marginBottom: 8,
    // marginLeft: 10,
    borderRadius: 6,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  subscribeBtn: {
    paddingHorizontal: 4,
    borderColor: "#B96C55",
    backgroundColor: "#B96C55",
  },
  alreadySubscribeBtn: {
    borderColor: "#B96C55",
  },
  messageBtn: {
    borderColor: "#3A444C",
    backgroundColor: "#3A444C",
    marginLeft: 10,

  },
  subscribeLabel: {
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 6,
    color: "#fff",
    textAlign: "center",
  },
  alreadySubscribeLabel: {
    color: "#B96C55",
  },
  messageLabel: {
    color: "#fff",
  },
  outlineLabel: {
    fontSize: 13,
    paddingVertical: 6,
    textAlign: "center",
    marginLeft: 6,
  }
});

export default Profile;
