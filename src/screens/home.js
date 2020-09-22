import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import PublicationPreview from "../components/publication-preview";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";
import globalStyle from "../styles";
import AsyncStorage from "@react-native-community/async-storage";

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
            <Text style={styles.text}>Il n'y pas de publications…</Text>
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
});
