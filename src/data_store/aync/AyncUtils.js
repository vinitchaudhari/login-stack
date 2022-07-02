import AsyncStorage from '@react-native-async-storage/async-storage';

export const setCache = async (key, value) => {
    let jsonVal = JSON.stringify(value)
    try {
        await AsyncStorage.setItem(key, jsonVal)
    } catch (e) {
        // save error
    }
}
export const getCache = async (key) => {
    try {
        let data = await AsyncStorage.getItem(key)
        return JSON.parse(data)
    } catch (e) {
        // save error
    }
}