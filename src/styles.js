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
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  signTitle: {
    fontSize: 28,
    color: darkColor,
    fontWeight: "300",
    alignSelf: "center",
    marginBottom: 30
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
    marginTop: 30,
    paddingVertical: 6,
    width: "100%",
    backgroundColor: mainColor,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signSeparationLine: {
    marginVertical: 30,
    borderColor: "#3A444C",
    borderWidth: 1,
    width: "70%",
    alignSelf: "center",
  },
  signSmText: {
    color: "#3A444C",
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "300",
  },
  signErrorMsg: {
    color: "#D55E5E",
    marginVertical: 3,
    fontSize: 12,
    fontWeight: "300",
  },
});
