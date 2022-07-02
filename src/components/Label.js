import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from "react-native-size-matters";
import { appFontBlack, appFontBold, BACKGROUND_DARK } from '../common/constants';

const Header = (props) => {
    let { title } = props;
    return (
        <View style={{ padding: moderateScale(2) }}>
            <Text
                style={{
                    color: BACKGROUND_DARK,
                    fontSize: moderateScale(40),
                    fontFamily: appFontBold,
                    paddingBottom: moderateScale(5)
                }}>
                {title}
            </Text>
        </View>
    );
}

export default Header