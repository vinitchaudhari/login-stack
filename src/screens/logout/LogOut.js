import { View, Text, Alert } from 'react-native'
import React from 'react'
import { setCache } from '../../data_store/aync/AyncUtils'

const LogOut = (props) => {

    Alert.alert(
        "Log-Out",
        "Do you want to log out ?",
        [
            {
                text: "YES",
                onPress: async () => {
                    await setCache("isLoggedIn", false)
                    props.navigation.navigate("login")
                },
            },
            {
                text: "Cancel",
                onPress: () => {
                    props.navigation.navigate("app")
                },
            },
        ],
        { cancelable: true }
    )
    return (null);

}

export default LogOut