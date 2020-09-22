import { StyleSheet } from "react-native";

const primary = "#B96C55";
const dark = "#3A444C";
const light = "#FAECE3";
const danger = "#D55E5E";
const info = "#379EE5";
const success = "#5DAF79";

export default StyleSheet.create({
  // Sign In & Sign Up Screens
  signScreen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: light,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
  },
  signTitle: {
    fontSize: 28,
    color: dark,
    fontWeight: "300",
    alignSelf: "center",
    marginBottom: 30,
  },
  signInputText: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderRadius: 6,
    color: dark,
    backgroundColor: "#FDFDFD",
    fontSize: 16,
    fontWeight: "300",
    marginVertical: 10,
  },
  signBtn: {
    marginTop: 30,
    paddingVertical: 6,
    width: "100%",
    backgroundColor: primary,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signSeparationLine: {
    marginVertical: 30,
    borderColor: dark,
    borderWidth: 1,
    width: "70%",
    alignSelf: "center",
  },
  signSmText: {
    color: dark,
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "300",
  },
  signErrorMsg: {
    color: danger,
    marginVertical: 3,
    fontSize: 12,
    fontWeight: "300",
  },

  // Main App Screen
  appScreen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },

  // Diagnostic
  diagnostic: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#fff",
  },
  questionSection: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "center",
  },
  questionTitle: {
    fontWeight: "500",
    fontSize: 24,
    color: dark,
    textAlign: "center",
    marginTop: 35,
  },
  flexFive: {
    flex: 5,
  },
  answerSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  answerBtn: {
    height: 45,
    borderWidth: 2,
    borderColor: dark,
    borderRadius: 20,
    marginBottom: 30,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  answerLabel: {
    color: dark,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },

  // Add Publication
  addPublicationScreen: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },

  // Buttons
  basicBtn: {
    borderRadius: 8,
    alignSelf: "stretch",
    paddingVertical: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  basicBtnLabel: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },

  // Background Colors
  bgPrimary: {
    backgroundColor: primary,
  },
  bgSuccess: {
    backgroundColor: success,
  },
  bgInfo: {
    backgroundColor: info,
  },

});
