import React, { Component } from "react";
import { View, Image, Text, StyleSheet, Searc } from "react-native";
import globalStyle from "../styles";
import TagCard from "../components/tag-card";
import { ScrollView } from "react-native-gesture-handler";

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [
        { name: "Frisé", img: "https://images.pexels.com/photos/2710131/pexels-photo-2710131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Bouclé", img: "https://images.pexels.com/photos/1837158/pexels-photo-1837158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Afro", img: "https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Tresse", img: "https://images.pexels.com/photos/4157657/pexels-photo-4157657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Locks", img: "https://images.pexels.com/photos/3536630/pexels-photo-3536630.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" },
        { name: "Twist", img: "https://images.pexels.com/photos/3680316/pexels-photo-3680316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Shampoing", img: "https://images.pexels.com/photos/4465969/pexels-photo-4465969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Soin", img: "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Masque", img: "https://images.pexels.com/photos/3892675/pexels-photo-3892675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Conditioner", img: "https://images.pexels.com/photos/813940/pexels-photo-813940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { name: "Pre-poo", img: "https://images.unsplash.com/photo-1549876612-f9ea53d45266?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" },
        { name: "Leave-in", img: "https://images.unsplash.com/photo-1544221479-30aa88e31c58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" },
      ]
    }
  }

  render() {
    return (
      <ScrollView backgroundColor="#fff">
        <View style={styles.screen}>
          <View style={styles.cardsView}>
          {this.state.tags.length > 0 ? (
            this.state.tags.map((prop, key) => {
              return (
                <TagCard key={key} name={prop.name} image={prop.img}></TagCard>
              )
            })
          ): <Text style={styles.text}>Il n'y pas de catégorie pour l'instant</Text>}
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
