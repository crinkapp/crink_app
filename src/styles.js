import { StyleSheet } from "react-native";

const mainColor = "#B96C55";
const darkColor = "#3A444C";
const lightColor = "#FAECE3";

export default StyleSheet.create({
  // Sign In & Sign Up Screens
  signScreen: {
    flex: 1,
    flexDirection: "column",
  },
  signInputText: {
    width: 300,
    padding: 14,
    borderWidth: 1,
    borderColor: lightColor,
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 10,
  },
  signInputTextError: {
    width: 300,
    padding: 14,
    borderWidth: 1,
    borderColor: "#DD655C",
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 10,
  },
  signBtn: {
    marginTop: 40,
    paddingVertical: 6,
    width: 300,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
