import React, { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { moderateScale } from "react-native-size-matters";
import { UIActivityIndicator } from 'react-native-indicators';
import { BLACK } from '../common/constants/colours';

export const CustomButton = props => {
    const { text, onPressFunction, buttonStyle, buttonTextStyle, rightIcon, rightIconStyle, iconName, iconSize, iconColor, showIndicatior, onLongPressFunction } = props;
    return (
        <Fragment>
            <TouchableOpacity style={[buttonStyle, { flexDirection: rightIcon || showIndicatior ? 'row' : 'column' }]}
                onPress={() => onPressFunction()}
                onLongPress={() => onLongPressFunction()}
            >
                {rightIcon ? <View style={[rightIconStyle, { paddingHorizontal: moderateScale(4) }]}>
                    <Icon
                        name={iconName ? iconName : null}
                        size={iconSize ? iconSize : moderateScale(25)}
                        color={iconColor ? iconColor : BLACK}
                    />
                </View> : showIndicatior ?
                    <View style={[rightIconStyle, { paddingHorizontal: moderateScale(4) }]}>
                        <UIActivityIndicator
                            color={iconColor ? iconColor : BLACK}
                            size={iconSize ? iconSize : moderateScale(25)}
                            animating={true}
                        />
                    </View>
                    : null}
                <Text style={buttonTextStyle}>{text}</Text>
            </TouchableOpacity>
        </Fragment>
    );
};
