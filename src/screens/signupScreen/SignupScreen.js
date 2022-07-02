import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import EmailValidator from 'email-validator';
import SignInForm from './SignInForm'
import PasswordValidator from 'password-validator';
import { addUser, checkEmail, checkMobNum, getUser } from '../../data_store/realm/helperfunctions/helper';
import { isInt } from '../../common/functions';
import { moderateScale } from 'react-native-size-matters';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Label';





const SignupScreen = (props) => {

  const [state, setState] = useState({
    name: null,
    email: null,
    mobNum: null,
    password: null,
    city: null,
    gender: null,
    isLoading: false
  })
  const [error, setError] = useState({})



  const submitFunction = async () => {
    let isValid = validation()
    if (!isValid) {
      return
    }
    let isPhoneNumUsed = await checkMobNum(state.mobNum)
    let isEmailUsed = await checkEmail(state.email)
    if (isEmailUsed || isPhoneNumUsed) {
      let error = {}
      let tempState = { ...state }
      if (isEmailUsed) {
        error.email = {
          errMsg: "Email is already used"
        }
        tempState.email = ""
        // setState({ ...state, email: "" })
      }
      if (isPhoneNumUsed) {
        error.mobNum = {
          errMsg: "mobile number is already used"
        }
        tempState.mobNum = ""
        // setState({ ...state, mobNum: "" })
      }
      setState(tempState)
      setError(error)
      return
    }


    let gender = state.gender?.find(item => item.selected);

    let userObj = {
      name: state.name,
      email: state.email,
      mobNum: state.mobNum,
      password: state.password,
      city: state.city,
      gender: gender ? gender.value : "",
    }

    addUser(userObj)
    props.navigation.navigate("login")
    setState({})
    console.log("submitFunction", isEmailUsed)
  }

  const onChangeFunction = (type, value) => {
    // console.log("changed value ", type, "=> ", value)
    setState({ ...state, [type]: value })
  }
  const onFocusText = () => {

  }
  const readData = async () => {
    let data = await getUser()
    console.log("database dat", data)
  }

  const validation = () => {

    var schema = new PasswordValidator();
    schema
      .is().min(6)
      .is().max(20)
      .has().uppercase()
      .has().lowercase()
      .has().digits(1)
      .has().not().spaces()
      .has().symbols(1)


    let error = {}
    let valid = true

    if (!state.name || !state.name.length) {
      error.name = {
        errMsg: "Please enter your name"
      }
      valid = false
    }
    if (!state.email || !state.email) {
      error.email = {
        errMsg: "Please enter your email"
      }
      valid = false
    } else if (state.email && !EmailValidator.validate(state.email)) {
      error.email = {
        errMsg: "Please enter valid email"
      }
      valid = false
    }
    if (!state.mobNum || !state.mobNum || !isInt(state.mobNum)) {
      error.mobNum = {
        errMsg: "Please enter your mobile number"
      }
      valid = false
    }
    if (!state.password || !state.password.length) {
      error.password = {
        errMsg: "Please enter your password"
      }
      valid = false
    } else if (state.password && !schema.validate(state.password)) {
      console.log("76")
      error.password = {
        errMsg: "Enter valid password e.g Abc@1234"
      }
      setState({ ...state, password: "" })
      valid = false
    }
    if (state.city && state.city === "Please Select City") {
      error.city = {
        errMsg: "Please select your city"
      }
      valid = false
    }
    if (!state.gender || !state.gender.length) {
      error.gender = {
        errMsg: "Please select your gender"
      }
      valid = false
    }
    !valid && setError(error)

    global.signUpErrTimer && clearTimeout(global.signUpErrTimer)
    global.signUpErrTimer = setTimeout(() => {
      setError({})
      global.signUpErrTimer = null
    }, 1000 * 3)

    return valid
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
      <ScrollView
        contentContainerStyle={{
          flex: 1
        }
        }
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            padding: moderateScale(12)
          }}
        >
          <Header title="SIGNUP" />
          <SignInForm
            readData={readData}
            submitFunction={submitFunction}
            onChangeFunction={onChangeFunction}
            name={state.name}
            email={state.email}
            mobNum={state.mobNum}
            password={state.password}
            city={state.city}
            gender={state.gender}
            error={error}
            loading={state.isLoading}
            onFocusText={onFocusText}
            navigation={props.navigation}
          />


        </View>
      </ScrollView>
    </LinearGradient >

  )
}

export default SignupScreen