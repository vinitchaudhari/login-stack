import { View, Text, Picker } from 'react-native'
import React, { useState } from 'react'
import { verticalScale } from 'react-native-size-matters'
import { customIconTextInputStyle } from '../common/stylesheets/customIconTextInputStyle'
import { loginStylesheet } from '../common/stylesheets/loginStylesheet'
import { BLACK, WHITE } from '../common/constants'

const CustomPicker = (props) => {
    const {
        defaultValue,
        onChange,
        name,
        dropdownList,
        error,
        customStyles
    } = props

    const [selectedValue, setSelectedValue] = useState("")

    const handleChange = (itemValue) => {
        setSelectedValue(itemValue)
        onChange && onChange(name, itemValue)
    }

    return (
        <View
            style={{
                ...customIconTextInputStyle.container,
                // ...loginStylesheet.customEmailInputStyle
                ...customStyles
            }}
        >
            <Picker
                selectedValue={
                    defaultValue ? defaultValue
                        : selectedValue
                }
                onValueChange={handleChange}
                style={[customIconTextInputStyle.fieldContainer,
                {
                    color: error ? BLACK : WHITE,
                    paddingLeft: 16,
                    paddingRight: 0,

                }
                ]}
            >
                {
                    dropdownList?.map((eachItem, i) => (
                        <Picker.Item
                            label={eachItem}
                            value={eachItem}
                            key={i}
                        />
                    ))}
            </Picker>
        </View>
    )
}

export default CustomPicker