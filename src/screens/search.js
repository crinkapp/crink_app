import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Searc } from "react-native";
import { SearchBar } from "react-native-elements";
import globalStyle from "../styles";

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
      <View style={globalStyle.appScreen}>
        <SearchBar
          placeholder="Titre, auteur ou tag…"
          onChangeText={this.updateSearch}
          value={search}
          platform="ios"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#3A444C",
    fontWeight: "300",
    paddingBottom: 30,
    fontSize: 28,
  },
});
