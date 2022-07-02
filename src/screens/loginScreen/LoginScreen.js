import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LoginForm } from './LoginForm'
import LinearGradient from 'react-native-linear-gradient'
import { fetchUser, saveUserDetails } from '../../data_store/realm/helperfunctions/helper'
import { setCache } from '../../data_store/aync/AyncUtils'
import { moderateScale } from 'react-native-size-matters'
import Header from '../../components/Label'
import { appFontBook, appFontExtraBold, BACKGROUND_DARK, BLACK, CYAN } from '../../common/constants'

const LoginScreen = (props) => {

  const [state, setState] = useState({
    email: null,
    password: null,
    isLoading: false
  })
  const [error, setError] = useState({})


  const submitFunction = async () => {

    let isValid = validation()
    console.log("submitFunction", isValid)
    if (!isValid) {
      return
    }
    let user = await fetchUser(state.email, state.password)
    console.log("user details", user)
    if (!user.length) {
      let error = {}
      error.email = {
        errMsg: "Invalid Credential"
      }
      error.password = {
        errMsg: "Invalid Credential"
      }
      error.Invalid = {
        errMsg: "Invalid Credential"
      }

      setError(error)
    } else {
      // await saveUserDetails(user[0])
      await setCache("isLoggedIn", true)
      await setCache("userDetails", user[0])
      props.navigation.navigate("app")
      // props.navigation.navigate("app", {
      //   "userDetails": user[0]
      // })
    }


  }

  const onChangeFunction = (type, value) => {
    console.log("changed value ", type, "=> ", value)
    setState({ ...state, [type]: value })
  }

  const validation = () => {
    let valid = true;
    let error = {}

    if (!state.email || !state.email.length) {
      error.email = {
        errMsg: "Please enter your Email/Phone"
      }
      valid = false
    }
    if (!state.password || !state.password.length) {
      error.password = {
        errMsg: "Please enter your password"
      }
      valid = false
    }
    !valid && setError(error)

    global.LoginErrorTimer && clearTimeout(global.LoginErrorTimer)
    global.LoginErrorTimer = setTimeout(() => {
      setError({})
    }, 1000 * 4)
    return valid

  }

  const onFocusText = () => {

  }

  return (
    <LinearGradient
      colors={['#333333', '#CFDEF3', '#CFDEF3', '#333333']}
      // colors={['#333333', '#CFDEF3', '#dd1818', '#333333']}
      start={{ x: 0, y: 0.95 }}
      end={{ x: 0.95, y: 0 }}
      locations={[0, 0.35, 0.55, 1]}
      style={{ height: '100%', width: '100%', position: 'absolute' }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          padding: moderateScale(12)
        }}
      >
        <View
          style={{
            alignSelf: "center"
          }}>
          <Header title="Login" />
        </View>
        <LoginForm
          submitFunction={submitFunction}
          onChangeFunction={onChangeFunction}
          onFocusText={onFocusText}
          email={state.email}
          password={state.password}
          error={error}
          isLoading={state.isLoading}
        />
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
          {"Dont have account ? "}
          <Text
            onPress={() => props.navigation.navigate("signup")}
            style={{
              textAlign: "center",
              width: '100%',
              fontFamily: appFontExtraBold,
              marginVertical: 8,
              color: CYAN,
              fontSize: moderateScale(15)
            }}
          >
            {"Sign up"}
          </Text>
        </Text>
      </View>
    </LinearGradient >

  )
}

export default LoginScreen