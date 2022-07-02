import { retrieveData, retrieveDataByEmail, retrieveDataByMobNum, retrieveDataByType, writeUserData } from "./user"

export const addUser = async (userData) => {
    await writeUserData("USER", userData)
}
export const getUser = async () => {
    let data = await retrieveData("USER")
    return data
}
export const fetchUser = async (email, password) => {
    let data = await retrieveDataByType("USER", email, password)
    return data
}
export const saveUserDetails = async (data) => {
    writeUserData("LOGGED_USER", data)
}
export const getUserDetails = async () => {
    let data = await retrieveData("LOGGED_USER")
    return data
}
export const checkMobNum = async (mobNum) => {
    let data = await retrieveDataByMobNum("USER", mobNum)
    return data
}
export const checkEmail = async (email) => {
    let data = await retrieveDataByEmail("USER", email)
    return data
}
