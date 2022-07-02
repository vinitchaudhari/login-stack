import { StyleSheet } from 'react-native';
import { WHITE, BOX_WHITE, LIGHT_COLOR, appFontMedium, } from '../constants';
import { moderateScale } from 'react-native-size-matters';

export const customIconTextInputStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: moderateScale(1),
        borderStyle: 'solid',
        borderColor: BOX_WHITE,
        marginVertical: moderateScale(4),
        backgroundColor: LIGHT_COLOR,
        borderRadius: moderateScale(25),
        elevation: moderateScale(2),
        shadowColor: 'rgba(0,0,0, 0.8)', // IOSa
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
    },
    fieldContainer: {
        height: moderateScale(50),
        width: '85%',
        color: WHITE,
        fontSize: moderateScale(18),
        fontFamily: appFontMedium
    },
    iconContainer: {
        textAlign: 'center',
        width: '15%',
    },
});
