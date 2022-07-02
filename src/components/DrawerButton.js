import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters';
import { DARK_GRAY, WHITE } from '../common/constants';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const DrawerButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                width: moderateScale(35),
                height: moderateScale(35),
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: DARK_GRAY,
                borderRadius: moderateScale(12)
            }}
            onPress={() => {
                props.navigation.toggleDrawer()
            }}
        >
            <FontAwesome5Icon
                name="bars"
                size={moderateScale(20)}
                color={WHITE}
            />
            {/* <Image
                style={{
                    height: moderateScale(18),
                    width: moderateScale(18),
                    resizeMode: 'contain'
                }}
                source={require("../../resources/images/bars-thik.png")}
            /> */}
        </TouchableOpacity>
    )
}

export default DrawerButton