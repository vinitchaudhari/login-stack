import React from "react";
import { View, TextInput } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { customIconTextInputStyle } from "../common/stylesheets/customIconTextInputStyle";
import { WHITE, BOX_WHITE, BLACK, appFontBold, appFontBook } from "../common/constants";

export const CustomIconTextInput = (props) => {
  const {
    placeholder,
    onChangeText,
    onFocusText,
    value,
    iconName,
    iconColor,
    iconSize,
    secureTextEntry,
    maxLength,
    setField,
    customStyles,
    iconPosition,
    placeholderColor,
    vectorIconDirectory,
    textType,
    isErrorShown,
    autoCorrect
  } = props;

  return (
    <View
      style={{
        ...customIconTextInputStyle.container,
        ...customStyles
      }}
    >
      {iconPosition === "left" ? (
        <EvilIcons
          name={iconName ? iconName : ""}
          color={iconColor}
          size={iconSize}
          solid
          style={customIconTextInputStyle.iconContainer}
        />
      ) : null}

      <TextInput
        // autoCorrect={autoCorrect ? autoCorrect : false}
        autoFocus={false}
        placeholder={placeholder ? placeholder : ""}
        placeholderTextColor={placeholderColor ? placeholderColor : BOX_WHITE}
        onChangeText={
          onChangeText ? (text) => onChangeText(setField, text) : null
        }
        onFocus={() => onFocusText()}
        style={[customIconTextInputStyle.fieldContainer, { color: isErrorShown ? BLACK : WHITE, paddingLeft: iconPosition === "right" ? 16 : 0, paddingRight: iconPosition === "right" ? 0 : 16 }]}
        defaultValue={value ? value : ""}
        secureTextEntry={secureTextEntry == true ? true : false}
        maxLength={maxLength ? maxLength : null}
        keyboardType={textType}
        maxFontSizeMultiplier={1}
      />
      {iconPosition === "right" && vectorIconDirectory == "AntDesign" ? (
        <AntDesign
          name={iconName ? iconName : ""}
          color={iconColor}
          size={iconSize}
          solid
          style={customIconTextInputStyle.iconContainer}
        />
      ) : iconPosition === "right" ?
        <EvilIcons
          name={iconName ? iconName : ""}
          color={iconColor}
          size={iconSize}
          solid
          style={customIconTextInputStyle.iconContainer}
        /> : null}
    </View>
  );
};
