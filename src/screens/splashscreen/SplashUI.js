import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
let animate
const SplashUI = () => {
    return (
        <View>
            <LottieView
                ref={ref => (animate = ref)}
                style={{
                    width: '90%',
                    justifyContent: 'center',
                    alignSelf: 'center',
                }}
                resizeMode="contain"
                source={require('../../../resources/splash.json')}
                loop
                hardwareAccelerationAndroid={true}
                enableMergePathsAndroidForKitKatAndAbove={true}
                autoPlay
            />
        </View>
    )
}

export default SplashUI