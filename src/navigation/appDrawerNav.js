import { Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { BACKGROUND_DARK } from '../common/constants';
import { routingStyle } from '../common/stylesheets/routingStyle';
import AppScreen from '../screens/appScreen/AppScreen';
import LogOut from '../screens/logout/LogOut';

let navOptions = {
    headerMode: "none",
    defaultNavigationOptions: {
        animationEnabled: true,
    }
}

const dashboardStack = createStackNavigator({
    app: {
        screen: AppScreen,
    },
},
    {
        ...navOptions,
        initialRouteName: "app",
    }
)

const MyDrawerNavigator = createDrawerNavigator(
    {
        dashboard: {
            screen: dashboardStack,
            navigationOptions: {
                title: "Dashboard",
            },
        },
        logout: {
            screen: LogOut,
            navigationOptions: {
                title: "LOG-OUT",
            },
        },
    },
    {
        unmountInactiveRoutes: true,
        drawerPosition: "left",
        initialRouteName: "dashboard",
        drawerBackgroundColor: BACKGROUND_DARK,
        drawerWidth: "75%",
        backBehavior: "none",
        contentOptions: {
            itemsContainerStyle: routingStyle.containerStyles,
        },
        defaultNavigationOptions: {
            animationEnabled: false,
        }
    }
);

export const DrawerNavigation = createAppContainer(MyDrawerNavigator);



// createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);