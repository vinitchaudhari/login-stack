import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { USER, PASSWORD, SIGNIN, CYAN, WHITE, BOX_WHITE, BLACK, appFontLight, appFontBook, RED, CANCEL_RED, appFontExtraBold } from "../../common/constants";
import { moderateScale } from "react-native-size-matters";
import { CustomButton } from "../../components/CustomButton";
import { loginStylesheet } from "../../common/stylesheets/loginStylesheet";
import { CustomIconTextInput } from "../../components/CustomTextInput";
import CustomPicker from "../../components/CustomPicker";
import { cities, genders } from "../../data_store/hardcoded/dropdowns";
import CustomRadioButton from "../../components/CustomRadioButton";

const SignInForm = (props) => {

  const {
    name,
    email,
    mobNum,
    password,
    city,
    gender,
    onChangeFunction,
    submitFunction,
    onFocusText,
    error,
    loading
  } = props

  return (
    <View>
      <View style={loginStylesheet.inputContainer}>
        <CustomIconTextInput
          value={name}
          placeholder={error && error.name ? error.name.errMsg : "Enter Name"}
          placeholderColor={error && error.name ? BLACK : BOX_WHITE}
          setField="name"
          onChangeText={onChangeFunction}
          onFocusText={onFocusText}
          secureTextEntry={false}
          iconName={"user"}
          iconPosition={"left"}
          iconSize={30}
          iconColor={error && error.name ? BLACK : WHITE}

          textType="default"
          isErrorShown={error && error.name}
          customStyles={
            error && error.name ?
              {
                ...loginStylesheet.customEmailInputStyle,
                ...{ backgroundColor: "#ffc870" },
              }
              : loginStylesheet.customEmailInputStyle
          }
        />
      </View>

      <View style={loginStylesheet.inputContainer}>
        <CustomIconTextInput
          value={email}
          placeholder={error && error.email ? error.email.errMsg : "Email"}
          placeholderColor={error && error.email ? BLACK : BOX_WHITE}
          onChangeText={onChangeFunction}
          onFocusText={onFocusText}
          secureTextEntry={false}
          maxLength={50}
          iconName={"user"}
          iconPosition={"left"}
          iconSize={30}
          iconColor={error && error.email ? BLACK : WHITE}
          setField="email"
          textType="default"
          isErrorShown={error && error.email}
          customStyles={
            error && error.email ?
              {
                ...loginStylesheet.customPasswordInputStyle,
                ...{ backgroundColor: "#ffc870" },
              }
              : loginStylesheet.customPasswordInputStyle
          }
        />
      </View>

      <View style={loginStylesheet.inputContainer}>
        <CustomIconTextInput
          value={mobNum}
          placeholder={error && error.mobNum ? error.mobNum.errMsg : "Mobile Number"}
          placeholderColor={error && error.mobNum ? BLACK : BOX_WHITE}
          onChangeText={onChangeFunction}
          onFocusText={onFocusText}
          secureTextEntry={false}
          maxLength={10}
          iconName={"user"}
          iconPosition={"left"}
          iconSize={30}
          iconColor={error && error.mobNum ? BLACK : WHITE}
          // setField="mob_num"
          setField="mobNum"
          textType="number-pad"
          isErrorShown={error && error.mobNum}
          customStyles={
            error && error.mobNum ?
              {
                ...loginStylesheet.customPasswordInputStyle,
                ...{ backgroundColor: "#ffc870" },
              }
              : loginStylesheet.customPasswordInputStyle
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
          secureTextEntry={true}
          maxLength={50}
          iconName={"lock"}
          iconPosition={"left"}
          iconSize={30}
          iconColor={error && error.password ? BLACK : WHITE}
          setField="password"
          textType="default"
          isErrorShown={error && error.password}
          customStyles={
            error && error.password ?
              {
                ...loginStylesheet.customPasswordInputStyle,
                ...{ backgroundColor: "#ffc870" },
              }
              : loginStylesheet.customPasswordInputStyle
          }
        />
      </View>
      <View style={loginStylesheet.inputContainer}>
        <CustomPicker
          name={"city"}
          dropdownList={cities}
          onChange={onChangeFunction}
          error={error && error.city}
          customStyles={
            error && error.city ?
              {
                ...loginStylesheet.customEmailInputStyle,
                ...{ backgroundColor: "#ffc870" },
              }
              : loginStylesheet.customEmailInputStyle
          }
        />
      </View>
      {/* radiobuttn for gender */}

      <View style={loginStylesheet.loginButtonContainer}>
        <CustomRadioButton
          title={"Please select your gender"}
          name={"gender"}
          radioButtonOptions={genders}
          onChange={onChangeFunction}
          error={error.gender}
        />
      </View>
      <View style={loginStylesheet.loginButtonContainer}>
        <CustomButton
          text={"Sign Up"}
          onPressFunction={() => submitFunction()}
          buttonStyle={loginStylesheet.buttonStyle}
          buttonTextStyle={loginStylesheet.buttonTextStyle}
          showIndicatior={loading ? true : false}
          iconSize={moderateScale(20)}
          iconColor={CYAN}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          width: '100%',
          paddingTop: 10,
          fontFamily: appFontBook,
          marginVertical: 8,
          color: BLACK
        }}
      >
        {"Already have account ? "}
        <Text
          onPress={() => props.navigation.navigate("login")}
          style={{
            textAlign: "center",
            width: '100%',
            fontFamily: appFontExtraBold,
            marginVertical: 8,
            color: CYAN,
            fontSize: moderateScale(15)
          }}
        >
          {"Login"}
        </Text>
      </Text>
      {/* <View style={loginStylesheet.loginButtonContainer}>
        <CustomButton
          text={"Back"}
          onPressFunction={() => props.navigation.navigate("login")}
          buttonStyle={loginStylesheet.buttonStyle}
          buttonTextStyle={loginStylesheet.buttonTextStyle}
          showIndicatior={loading ? true : false}
          iconSize={moderateScale(20)}
          iconColor={CYAN}
        />
      </View> */}
    </View>
  );
}

export default SignInForm