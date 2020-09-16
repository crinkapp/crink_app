import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";

const list = [
  {
    title: "Compte",
    icon: "user-circle",
    color: "#3A444C",
    mt: 2,
    logout: false,
  },
  {
    title: "Notifications",
    icon: "bell",
    color: "#3A444C",
    mt: 2,
    logout: false,
  },
  {
    title: "À propos",
    icon: "info-circle",
    color: "#3A444C",
    mt: 2,
    logout: false,
  },
  {
    title: "Thème",
    icon: "palette",
    color: "#3A444C",
    mt: 2,
    logout: false,
  },
  {
    title: "Aide",
    icon: "question-circle",
    color: "#3A444C",
    mt: 2,
    logout: false,
  },
  {
    title: "Se déconnecter",
    icon: "sign-out-alt",
    color: "#D55E5E",
    mt: 30,
    logout: true,
  },
];

const settingPreview = (props) => {
  return (
    <View style={styles.preview}>
      {list.map((item, i) => (
        <ListItem
          key={i}
          containerStyle={{ marginTop: item.mt }}
          underlayColor="none"
          onPress={item.logout ? props.onLogout : null}
        >
          <Icon
            name={item.icon}
            style={styles.icon}
            size={18}
            solid
            color={item.color}
          />
          <ListItem.Content>
            <ListItem.Title style={{ color: item.color }}>
              {item.title}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </View>
  );
};

export default settingPreview;

const styles = StyleSheet.create({
  preview: {
    width: "100%",
  },
  icon: {
    marginVertical: 5,
  },
});
