import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, RefreshControl, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import globalStyle from "../styles";
import axios from "axios";
import { API_URL } from "react-native-dotenv";

import AsyncStorage from "@react-native-community/async-storage";

const emptyFavoris = require("../../assets/icons/reviews.png");

export default class Favoris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
      refreshing: false,
      actualUserId: null,
      loading: false,
    };
  }

  async _onRefresh() {
    this.setState({ refreshing: true });
    await this.getAllUserFavoris().then((res) => {
      this.setState({
        publications: res.data.reverse(),
        refreshing: false,
      });
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getAllUserFavoris();
    AsyncStorage.getItem("user_id").then((actualUserId) => {
      this.setState({ actualUserId });
    });
  }

  getAllUserFavoris = async () => {
    await axios
      .get(`${API_URL}all-user-favoris`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          publications: res.data.reverse(),
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };
  
  render() {
      if (this.state.loading) {
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
          <ScrollView
            backgroundColor="#fff"
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            <View style={globalStyle.appScreen}>
              {this.state.publications.length > 0 ? (
                this.state.publications.map((prop, key) => {
                  return (
                    <PublicationPreview
                      key={key}
                      onPress={(publication) =>
                        this.props.navigation.navigate("Publication", {
                          publication,
                          actualUserId: this.state.actualUserId,
                        })
                      }
                      goToProfile={(user) => {
                        this.props.navigation.navigate("Profile", {
                          user,
                          isActualUser:
                            parseInt(this.state.actualUserId) === user.id
                              ? true
                              : false,
                        });
                      }}
                      publication={prop}
                    ></PublicationPreview>
                  );
                })
              ) : (
                <View style={globalStyle.appScreen}>
        <View style={styles.emptySection}>
          <Image source={emptyFavoris} style={styles.img} />
          <Text style={styles.title}>Aucun favoris</Text>
          <Text style={styles.info}>
            Tes publications favoris seront au chaud ici.
          </Text>
          <TouchableOpacity
            style={[globalStyle.basicBtn, globalStyle.bgInfo]}
            onPress={() => this.props.navigation.navigate("Search")}
          >
          <Icon name="search" size={17} style={{marginRight: 6}} color="#fff" />
            <Text style={globalStyle.basicBtnLabel}>
              Explorer les publications
            </Text>
          </TouchableOpacity>
        </View>
      </View>
              )}
            </View>
          </ScrollView>
        );
      }
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#3A444C",
    fontWeight: "300",
    paddingBottom: 30,
    fontSize: 28,
  },
  img: {
    height: 230,
    width: 300,
    alignSelf: "stretch",
    marginVertical: 30,
    resizeMode: "cover",
  },
  emptySection: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#3A444C",
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 16,
  },
  info: {
    color: "#3A444C",
    fontWeight: "300",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20,
  },
});
