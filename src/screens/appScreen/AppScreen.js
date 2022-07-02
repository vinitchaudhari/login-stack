import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';

import { getCache, setCache } from '../../data_store/aync/AyncUtils';
import AppUI from './AppUI';





const AppScreen = (props) => {
  const [userData, setUserData] = useState({})
  useEffect(async () => {
    let userData = await getCache("userDetails")
    // let userData = await getUserDetails()
    console.log("useefffecttttt", userData)
    setUserData(userData)
  }, [])

  const logOut = async () => {
    await setCache("isLoggedIn", false)
    await setCache("userDetails", null)
    props.navigation.navigate("login")
  }

  return (
    <LinearGradient
      colors={['#D7E1EC', '#B8C6DB', '#B8C6DB', '#F5F7FA']}
      start={{ x: 0, y: 0.95 }}
      end={{ x: 0.95, y: 0 }}
      locations={[0, 0.35, 0.55, 1]}
      style={{ height: '100%', width: '100%', position: 'absolute' }}
    >
      <AppUI
        userData={userData}
        navigation={props.navigation}
      />
    </LinearGradient>

  )
}

export default AppScreen