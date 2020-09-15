import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const list = [
  {
    title: "Compte",
    icon: "star",
  },
  {
    title: "Notifications",
    icon: "notifications",
  },
  {
    title: "Confidentialité",
    icon: "lock",
  },
  {
    title: "à propos",
    icon: "info",
  },
  {
    title: "Thème",
    icon: "palette",
  },
  {
    title: "Aide",
    icon: "help",
  },
  {
    title: "Se déconnecter",
    icon: "",
  },
];

const settingPreview = () => {
    return (
      <View style={style.preview}>
        <View>
          {list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Icon name={item.icon} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </View>
      </View>
    );
};

export default settingPreview;

const style = StyleSheet.create({
  preview: {
    // flex: 1,
    width: "100%",
  }
});