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
  }

  onLike = (publication_id) => {
    return axios
      .post(`${API_URL}/add-like`, {
        id: publication_id,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

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
                  onPress={() =>
                    this.props.navigation.navigate("Publication", {
                      publication: prop,
                    })
                  }
                  onLike={() => this.onLike(prop.id)}
                  path_media_publication={`${S3_URL}/${prop.path_media_publication}`}
                  title_publication={prop.title_publication}
                  time_to_read_publication={prop.time_to_read_publication}
                  username_user={prop.user.username_user}
                  path_profil_picture_user={
                    prop.user.path_profil_picture_user
                      ? `${S3_URL}/${prop.user.path_profil_picture_user}`
                      : "https://crinksite.s3.eu-west-3.amazonaws.com/no-picture.jpg"
                  }
                  nbLikes={prop.nbLikes}
                  nbComments={prop.nbComments}
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
