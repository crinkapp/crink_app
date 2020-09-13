import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Searc } from "react-native";
import { SearchBar } from "react-native-elements";
import globalStyle from "../styles";
import TagCard from "../components/tag-card";
import { ScrollView } from "react-native-gesture-handler";

export default class Search extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <ScrollView backgroundColor="#fff">
        <View style={styles.screen}>
          {/* <SearchBar
            placeholder="Titre, auteur ou tag…"
            onChangeText={this.updateSearch}
            inputStyle={styles.input}
            value={search}
            platform="ios"
            cancelButtonTitle="Annuler"
            cancelButtonProps={{
              buttonTextStyle: { fontSize: 16 },
              color: "#B96C55",
            }}
          /> */}
          <View style={styles.cardsView}>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
            <TagCard></TagCard>
          </View>
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
    paddingHorizontal: 0,
    paddingVertical: 30,
    backgroundColor: "white",
  },
  input: {
    fontSize: 16,
  },
  cardsView: {
    flex: 3,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center"
  },
});
