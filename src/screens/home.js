import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
  TouchableOpacity,
} from "react-native";
import PublicationPreview from "../components/publication-preview";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";
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
    };
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    this.getAllPublications().then(() => {
      this.setState({ refreshing: false });
    });
  }

  componentDidMount() {
    this.getAllPublications();
    AsyncStorage.getItem("user_id").then((actualUserId) => {
      this.setState({ actualUserId });
    });
  }

  getAllPublications = async () => {
    return await axios
      .get(`${API_URL}/all-publications`)
      .then((res) => {
        this.setState({
          publications: res.data.reverse(),
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
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
                Pour l'instant nous ne pouvons déterminer les articles qui sont
                fait pour toi.
              </Text>
              <TouchableOpacity
                style={styles.diagnosticBtn}
                onPress={() => this.props.navigation.navigate("QuestionOne")}
              >
                <Text style={styles.diagnosticLabel}>
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
  diagnosticBtn: {
    backgroundColor: "#B96C55",
    borderRadius: 8,
    alignSelf: "stretch",
    paddingVertical: 12,
  },
  diagnosticLabel: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },
});
