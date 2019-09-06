import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import AntDesign from 'react-native-vector-icons/SimpleLineIcons';

import Home from './views/Home/Home';
import UserProfile from './views/UserProfile/UserProfile';



const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = AntDesign;
    let iconName;
    if (routeName === 'Home') {
        iconName = `home`;
        // We want to add badges to home tab icon

    } else if (routeName === 'Search') {
        iconName = `magnifier`;
    }

    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} solid />;
};

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    UserProfile: UserProfile
}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        tabBarOptions: {
            labelStyle: {
                fontSize: 16,
            },
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
)
const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        headerMode: "none",
        navigationOptions: () => ({

            headerTransparent: true,

        }),
    },
    UserProfile: {
        screen: UserProfile,

        navigationOptions: () => ({
            headerTransparent: true,
            headerTintColor: "white",
        }),
    },
});


const Routes = createAppContainer(AppNavigator);


export default Routes;
