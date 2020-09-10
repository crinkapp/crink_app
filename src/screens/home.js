import React, { Component } from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import PublicationPreview from "../components/publication-preview";
import axios from "axios";
import { API_URL, S3_URL } from "react-native-dotenv";
import { LongPressGestureHandler } from "react-native-gesture-handler";
import { log } from "react-native-reanimated";

// const image1 =
//   "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
// const title1 = "Comment peigner vos cheveux bouclés ?";
// const tags1 = ["bouclés", "afro", "peigne", "soins"];
// const likes1 = 723;
// const comments1 = 32;
// const username1 = "Saïdou";
// const userIcon1 =
//   "https://www.envolgym.org/envolgym_data/upload/images/SITE/EQUIPE/anon.png";

// const image2 =
//   "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
// const title2 = "Comment voir des girafes dans la savane ?";
// const tags2 = ["girafe", "savane", "animal"];
// const likes2 = "63k";
// const comments2 = "2k";
// const username2 = "Crink";
// const userIcon2 =
//   "file:///Users/eudreybandelaria/Documents/ipssi/projet-annuel/icon/fav-icon.png";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publications: [],
    };
  }
  // pathImg: "",
  // title: "",
  // // tags: "",
  // // likes: "",
  // // comments: "",
  // username: "Eudrey",
  // userIcon:
  //   "https://www.envolgym.org/envolgym_data/upload/images/SITE/EQUIPE/anon.png",

  componentDidMount() {
    this.getAllPublications();
  }

  getAllPublications = async () => {
    return await axios
      .get(`${API_URL}/all-publications`)
      .then((res) => {
        this.setState({
          publications: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.screen}>
          {this.state.publications.length > 0 ? (
            this.state.publications.map((prop, key) => {
              return (
                <PublicationPreview
                  onPress={() => console.log('testing')}
                  key={key}
                  previewImg={`${S3_URL}/${prop.path_media_publication}`}
                  title={prop.title_publication}
                  username="eudrey"
                  userIcon="https://www.envolgym.org/envolgym_data/upload/images/SITE/EQUIPE/anon.png"
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
  screen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: "#3A444C",
    fontWeight: "300",
    paddingBottom: 30,
    fontSize: 22,
  },
});
