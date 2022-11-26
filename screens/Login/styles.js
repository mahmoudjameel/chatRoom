import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

import { COLORS, FONTSIZE } from "../../contains";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  boxLogo: {
    position: "relative",
    width: '100%',
    height: 234,
    alignSelf: "center",
    backgroundColor: COLORS.main,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgLogo: {
    width: "100%",
    height: "100%",
    resizeMode: 'center'
  },
  boxTextLogo:{
    width: '100%',
    backgroundColor: COLORS.main,
    height: 100,
    borderBottomLeftRadius: 130,
  },
  boxInput:{
    paddingHorizontal: 30,
    paddingTop: 10,
    position: 'relative'
  },
  textLogo: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.white,
    borderBottomLeftRadius: 30,
    borderBottomEndRadius: 30
  },
  btnLogin: {
    marginTop: 34,
    width: 204,
    height: 46,
    backgroundColor: COLORS.main,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  textLogin: {
    fontSize: 18,
    color: COLORS.white,
  },
  btnRegister: {
    alignSelf: "flex-end",
    marginRight: 6,
    marginTop: 36,
  },
  textRegister: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: COLORS.main,
  },
});

export default styles;
