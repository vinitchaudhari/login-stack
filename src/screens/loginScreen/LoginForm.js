import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { USER, PASSWORD, SIGNIN, CYAN, WHITE, BOX_WHITE, BLACK, appFontBook, CANCEL_RED, RED } from "../../common/constants";
import { moderateScale } from "react-native-size-matters";
import { CustomButton } from "../../components/CustomButton";
import { loginStylesheet } from "../../common/stylesheets/loginStylesheet";
import { CustomIconTextInput } from "../../components/CustomTextInput";

export const LoginForm = (props) => {
  const {
    email,
    password,
    onChangeFunction,
    submitFunction,
    error,
    onFocusText,
    loading
  } = props;

  useEffect(() => {
    console.log("error", error)
  }, [props.error])
  return (
    <View>
      {error && error.email && error.email.errMsg === "Invalid Credential" &&
        <View
          style={{
            width: "50%",
            alignSelf: "center"
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontFamily: appFontBook,
              color: RED,
              borderWidth: 1,
              borderColor: CANCEL_RED,
              borderRadius: 25,
              paddingVertical: 5
            }}
          >
            Invalid Credential
          </Text>
        </View>}
      <View style={loginStylesheet.inputContainer}>
        <CustomIconTextInput
          value={email}
          placeholder={error && error.email ? error.email.errMsg : USER}
          placeholderColor={error && error.email ? BLACK : BOX_WHITE}
          onChangeText={onChangeFunction}
          onFocusText={onFocusText}
          secureTextEntry={false}
          iconName={"user"}
          iconPosition={"left"}
          iconSize={30}
          iconColor={error && error.email ? BLACK : WHITE}
          setField="email"
          textType="default"
          isErrorShown={error && error.email}
          customStyles={
            error && error.email
              ? {
                ...loginStylesheet.customEmailInputStyle,
                ...{ backgroundColor: "#ffc870" },
              }
              : loginStylesheet.customEmailInputStyle
          }
        />
      </View>
      <View style={loginStylesheet.inputContainer}>
        <CustomIconTextInput
          value={password}
          placeholder={error && error.password ? error.password.errMsg : PASSWORD}
          placeholderColor={error && error.password ? BLACK : BOX_WHITE}
          onChangeText={onChangeFunction}
          onFocusText={onFocusText}
          secureTextEntry={error && error.password ? false : true}
          maxLength={50}
          iconName={"lock"}
          iconPosition={"left"}
          iconSize={30}
          iconColor={error && error.password ? BLACK : WHITE}
          setField="password"
          textType="default"
          isErrorShown={error && error.password}
          customStyles={
            error && error.password
              ? {
                ...loginStylesheet.customPasswordInputStyle,
                ...{ backgroundColor: "#ffc870" },
              }
              : loginStylesheet.customPasswordInputStyle
          }
        />
      </View>
      <View style={loginStylesheet.loginButtonContainer}>
        <CustomButton
          text={SIGNIN}
          onPressFunction={() => submitFunction()}
          buttonStyle={loginStylesheet.buttonStyle}
          buttonTextStyle={loginStylesheet.buttonTextStyle}
          showIndicatior={loading ? true : false}
          iconSize={moderateScale(20)}
          iconColor={CYAN}
        />
      </View>
    </View>
  );
};
