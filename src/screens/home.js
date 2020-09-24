import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import PublicationPreview from "../components/publication-preview";
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import globalStyle from "../styles";
import AsyncStorage from "@react-native-community/async-storage";

const emptyHome = require("../../assets/icons/empty-publications.png");

export default class Home extends React.Component {
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
    await this.getAllPublications().then(() => {
      this.setState({ refreshing: false });
    });
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getAllPublications();
    AsyncStorage.getItem("user_id").then((actualUserId) => {
      this.setState({ actualUserId });
    });
  }

  getAllPublications = async () => {
    await axios
      .get(`${API_URL}all-publications`)
      .then((res) => {
        const sortedPublication = res.data.reverse();
        this.setState({
          publications: sortedPublication,
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
              <View style={styles.emptySection}>
                <Image source={emptyHome} style={styles.img} />
                <Text style={styles.title}>Bienvenue !</Text>
                <Text style={styles.info}>
                  Pour l'instant nous ne pouvons déterminer les articles qui
                  sont fait pour toi.
                </Text>
                <TouchableOpacity
                  style={[globalStyle.basicBtn, globalStyle.bgPrimary]}
                  onPress={() => this.props.navigation.navigate("QuestionOne")}
                >
                  <Text style={globalStyle.basicBtnLabel}>
                    Commencer le diagnostic capillaire
                  </Text>
                </TouchableOpacity>
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
    fontSize: 22,
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
    paddingHorizontal: 16,
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
