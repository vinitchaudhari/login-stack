import Realm from 'realm'
import { guidGenerator } from "../../../common/functions"
import { databaseOption } from "../schemas"


export const writeUserData = (schemaName, userData) => {
    Realm.open(databaseOption)
        .then((realm) => {
            realm.write(() => {
                {
                    realm.create(schemaName, {
                        id: userData.id ? userData.id : guidGenerator(),
                        name: userData.name,
                        email: userData.email,
                        password: userData.password,
                        mobileNum: userData.mobNum ? userData.mobNum :
                            userData.mobileNum ? userData.mobileNum : "",
                        city: userData.city,
                        gender: userData.gender
                    }, true)
                }

                console.log(`written ${schemaName} data`)
            })

            // realm.close();
        })
        .catch((error) => {
            console.log(`break while writting in ${schemaName}`, error)
        })
}

export const retrieveData = (propName) => {
    return new Promise((resolve, reject) => {
        Realm.open(databaseOption)
            .then((realm) => {
                let data = []
                data = realm.objects(propName)
                console.log("inside realm ", data)
                if (realm.objects(propName).isValid) {
                    console.log("inside realm ", data)
                    resolve(data)
                }
            })
            .catch((error) => {
                console.log('error fetching all data ' + propName + ' ', error)
                resolve([])
            })
    })
}




export const retrieveDataByMobNum = (propName, value) =>
    new Promise((resolve, reject) => {
        Realm.open(databaseOption)
            .then((realm) => {
                let dataArr = []
                let data = realm.objects(propName)
                dataArr = data.filtered(`mobileNum = "${value}"`)
                dataArr.length ? resolve(true) : resolve(false)
            })
            .catch((error) => {
                console.log(
                    `error fetching ${propName} data based on mobileNum`,
                    error,
                )
                resolve([])
            })
    })
export const retrieveDataByEmail = (propName, value) =>
    new Promise((resolve, reject) => {
        Realm.open(databaseOption)
            .then((realm) => {
                let dataArr = []
                let data = realm.objects(propName)
                dataArr = data.filtered(`email = "${value}"`)
                dataArr.length ? resolve(true) : resolve(false)
            })
            .catch((error) => {
                console.log(
                    'error fetching data based on id of ' + propName + ' ',
                    error,
                )
                resolve([])
            })
    })

export const retrieveDataByType = (
    propName,
    email,
    password
) =>
    new Promise((resolve, reject) => {
        Realm.open(databaseOption)
            .then((realm) => {
                let dataArr = []
                let data = realm.objects(propName)
                dataArr = data.filtered(
                    `email = "${email}" AND password = "${password}"`
                )
                if (!dataArr.length) {
                    dataArr = data.filtered(
                        `mobileNum = "${email}" AND password = "${password}"`
                    )
                }

                resolve(dataArr)
            })
            .catch((error) => {
                console.log(
                    'error fetching data based on type of ' + propName + ' ',
                    error,
                )
                resolve([])
            })
    })