import { View, Text } from 'react-native'
import React from 'react'
import { RadioGroup } from 'react-native-radio-buttons-group'
import { moderateScale } from 'react-native-size-matters'
import { appFontBlack, appFontBold, appFontBook, appFontLight, appFontMedium, CANCEL_RED, RED } from '../common/constants'

const CustomRadioButton = (props) => {
    const {
        name,
        radioButtonOptions,
        onChange,
        title,
        error
    } = props
    const handleChange = (option) => {
        onChange && onChange(name, option)
    }
    return (
        <View>
            {title &&
                <Text
                    style={{
                        color: "#484848",
                        fontFamily: appFontBook,
                        fontSize: moderateScale(20)
                    }}
                >
                    {title}
                </Text>
            }
            {error &&
                <Text
                    style={{
                        fontFamily: appFontBold,
                        fontSize: 14,
                        textAlign: "center",
                        paddingVertical: 4,
                        marginVertical: 5,
                        color: RED,
                        borderColor: CANCEL_RED,
                        borderWidth: 1,
                        borderRadius: 25
                    }}
                >
                    {error && error.errMsg}
                </Text>
            }
            <View
                style={{
                    alignSelf: "center",
                    paddingTop: moderateScale(8)
                }}
            >
                <RadioGroup
                    layout='row'
                    radioButtons={radioButtonOptions}
                    onPress={(option) => handleChange(option)}
                />
            </View>
        </View>
    )
}

export default CustomRadioButton