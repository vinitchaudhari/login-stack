import { StyleSheet, Dimensions } from "react-native";

import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { WHITE, CYAN, LOGO_RED, BOX_RED, RED, ALT_RED, appFontBlack, appFontBold, appFontBook, appFontMedium, appFontLight } from "../constants";


export const loginStylesheet = StyleSheet.create({
  keyboardAvoidingViewStyle: {
    flex: 1,
  },
  backgroundStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: scale(20),
  },
  logoContainerUp: {
    flex: 1,
    marginTop: moderateScale(75),
    paddingTop: moderateScale(10),
    width: "100%",
    alignItems: "center"
  },
  logoNameContainer: {
    width: "60%",
    height: moderateScale(50)
  },
  upperlogoContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  errorContainerStyle: {
    minHeight: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 50,
    borderColor: BOX_RED,
    borderWidth: 1,
    paddingHorizontal: 8,
    marginVertical: 16
  },
  errorTextStyle: {
    color: "#fff",
    fontSize: verticalScale(14),
    fontFamily: appFontBook
  },
  loginFormContainerStyle: {
    flex: 2,
    flexDirection: "column",
    marginBottom: moderateScale(20),
    justifyContent: "center",
  },
  loginButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(25),
  },
  bottomlogoContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: moderateScale(60),
    width: "100%",
    flexDirection: "row"
  },
  upperlogoIcon: {
    height: moderateScale(50),
    width: "100%",
  },
  upperlogoIconBg: {
    height: moderateScale(130),
    width: "100%",
  },
  upperlogoTextContainer: {
    alignItems: "center"
  },
  logoNameText: {
    fontWeight: "bold",
    fontSize: moderateScale(26),
    color: WHITE,
    alignSelf: "auto",
  },
  logoModuleText: {
    fontSize: moderateScale(18),
    color: WHITE,
    fontFamily: appFontBlack
  },
  inputContainer: {
    height: verticalScale(50), marginVertical: 4
  },
  buttonStyle: {
    width: "100%",
    height: verticalScale(40),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: WHITE,
    borderRadius: moderateScale(50),
  },
  buttonTextStyle: {
    color: CYAN,
    fontSize: moderateScale(12),
    fontFamily: appFontBold
  },
  customEmailInputStyle: {
    backgroundColor: "#333333",
    borderWidth: 0.5,
    borderRadius: 50
  },
  customPasswordInputStyle: {
    backgroundColor: "#333333",
    borderWidth: 0.5,
    borderRadius: 50
  },

  sponsorLogoText: {
    fontSize: moderateScale(10),
    color: WHITE,
    fontFamily: appFontBold,
  },
  bottomlogoIconCon: {
    flex: 1,
    height: "70%",
  },
  bottomTextCon: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  bottomlogoIcon: {
    width: "70%",
    height: moderateScale(35),
    alignItems: "center",
  },
  bottomTouchCon: {
    width: "35%",
    height: verticalScale(30),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(-20),
  },
  resetPassword: {
    marginTop: verticalScale(10),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  loginReset: {
    color: WHITE,
    fontSize: moderateScale(13),
    fontFamily: appFontBook
  },
  loginResetLabel: {
    color: WHITE,
    fontSize: moderateScale(13),
    fontFamily: appFontBlack
  },
});
