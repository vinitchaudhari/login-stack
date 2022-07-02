import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AppScreen from '../screens/appScreen/AppScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import LogOut from '../screens/logout/LogOut';
import SignupScreen from '../screens/signupScreen/SignupScreen';
import SplashScreen from '../screens/splashscreen/SplashScreen';
import { DrawerNavigation } from './appDrawerNav';

let navOptions = {
  headerMode: "none",
  defaultNavigationOptions: {
    animationEnabled: true,
  }
}

const LoginStack = createStackNavigator({
  login: {
    screen: LoginScreen,
  },
  signup: {
    screen: SignupScreen,
  },
},
  {
    ...navOptions,
    initialRouteName: "login",
  }
)
const AppStack = createStackNavigator({
  app: {
    screen: DrawerNavigation,
  },
},
  {
    ...navOptions,
    initialRouteName: "app",
  }
)
const SplashStack = createStackNavigator(
  {
    splash: {
      screen: SplashScreen
    }
  },
  {
    ...navOptions
  }
)
const SwitchNavigator = createSwitchNavigator(
  {
    splash: SplashStack,
    login: LoginStack,
    app: AppStack,
  },
  {
    ...navOptions,
    initialRouteName: "splash",
  }
)

export const AppNavigator = createAppContainer(SwitchNavigator)