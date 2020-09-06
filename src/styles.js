import { StyleSheet } from "react-native";

const mainColor = "#B96C55";
const darkColor = "#3A444C";
const lightColor = "#FAECE3";
const redColor = "#D55E5E";

export default StyleSheet.create({
  // Sign In & Sign Up Screens
  signScreen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: lightColor,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  signInputText: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderRadius: 6,
    color: darkColor,
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 10,
  },
  signBtn: {
    marginTop: 40,
    paddingVertical: 6,
    width: "100%",
    backgroundColor: darkColor,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
