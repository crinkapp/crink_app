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
    justifyContent: "center",
  },
  signTitle: {
    fontSize: 28,
    color: darkColor,
    fontWeight: "300",
    alignSelf: "center",
    marginBottom: 50
  },
  signInputText: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderRadius: 6,
    color: darkColor,
    backgroundColor: "#FDFDFD",
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 10,
  },
  signBtn: {
    marginTop: 40,
    paddingVertical: 6,
    width: "100%",
    backgroundColor: mainColor,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
