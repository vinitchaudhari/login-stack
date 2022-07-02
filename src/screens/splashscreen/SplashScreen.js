import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { getCache } from '../../data_store/aync/AyncUtils'
import SplashUI from './SplashUI'
import LinearGradient from 'react-native-linear-gradient'

export class SplashScreen extends Component {

  async componentDidMount() {
    let isLoggedIn = await getCache("isLoggedIn")
    console.log("splash valiue", isLoggedIn)
    setTimeout(() => {
      if (isLoggedIn) {
        this.props.navigation.navigate("app")
      } else {
        this.props.navigation.navigate("login")
      }
    }, 1000 * 2)
  }
  render() {
    return (
      <LinearGradient
        colors={['#333333', '#CFDEF3', '#CFDEF3', '#333333']}
        start={{ x: 0, y: 0.95 }}
        end={{ x: 0.95, y: 0 }}
        locations={[0, 0.35, 0.55, 1]}
        style={{ height: '100%', width: '100%', position: 'absolute' }}
      >
        <View
          style={{
            flex: 1,
            alignSelf: "center",
            justifyContent: "center"
          }}
        >
          <SplashUI />

        </View>
      </LinearGradient>

    )
  }
}

export default SplashScreen