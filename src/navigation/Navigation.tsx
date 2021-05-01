import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { UsersScreen } from '@screens/UsersScreen/UsersScreen';
import { WelcomeScreen } from '@screens/welcome/WelcomeScreen';
import { Route } from 'models/constants/Route';
import React, { FC, useEffect, } from 'react';
import { HOME_STACK_OPTIONS, USERLIST_STACK_OPTIONS, } from './NavigationTypings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '@screens/SettingsScreen/SettingsScreen';
import { darkThemeType } from 'redux/themeStore/reducers';
import { useDispatch, useSelector } from 'react-redux';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native'
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper'
import { checkTheme } from '../redux/themeStore/action';
import { Colors } from '../Config/Colors'
const Stack = createStackNavigator();
const SettingStack = createStackNavigator();
const UserStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export const Navigation: FC = () => {
    const data: darkThemeType = useSelector((state: any) => state.themeReducer);
    const appDispatch = useDispatch();
    useEffect(() => {
        appDispatch(checkTheme());
    }, [])

    let CustomDefaultTheme = {
        ...PaperDefaultTheme,
        ...NavigationDefaultTheme,
        colors: {
            ...PaperDefaultTheme.colors,
            ...NavigationDefaultTheme.colors,
            accent: Colors.primary,
            primary: Colors.primary,
            card: 'rgb(255, 255, 255)',
            // background: '#ffffff',
            text: '#000'
        }
    }

    let CustomDarkTheme = {
        ...PaperDarkTheme,
        ...NavigationDarkTheme,
        colors: {
            ...PaperDarkTheme.colors,
            ...NavigationDarkTheme.colors,
            accent: Colors.primary,
            primary: Colors.primary,
            card: 'rgb(18, 18, 18)',
            background: '#333333',
            text: '#ffffff'
        }
    }

    const HomeStack = () => {
        return (
            <Stack.Navigator screenOptions={HOME_STACK_OPTIONS}>
                <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} />
            </Stack.Navigator>
        )
    }

    const UsersListStack = () => {
        return (
            <UserStack.Navigator screenOptions={{ ...USERLIST_STACK_OPTIONS, title: "Users" }}>
                <UserStack.Screen name={Route.USERSCREEN} component={UsersScreen} />
            </UserStack.Navigator>
        )
    }

    const SettingScreenStack = () => {
        return (
            <SettingStack.Navigator screenOptions={{ ...USERLIST_STACK_OPTIONS, title: "Settings" }}>
                <SettingStack.Screen name={Route.SETTINGS} component={SettingsScreen} />
            </SettingStack.Navigator>
        )
    }


    return (
        <PaperProvider theme={data.isDarkTheme ? CustomDarkTheme : CustomDefaultTheme}>
            <NavigationContainer
                theme={data.isDarkTheme ? CustomDarkTheme : CustomDefaultTheme}>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === Route.APPSTACK) {
                                iconName = focused
                                    ? 'home'
                                    : 'home-outline';
                            } else if (route.name === Route.USERSCREEN) {
                                iconName = focused ? 'person' : 'person-outline';
                            } else if (route.name === "Settings") {
                                iconName = focused ? 'settings' : 'settings-outline';
                            }
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: Colors.primary,
                        inactiveTintColor: 'gray',
                    }}
                >
                    <Tab.Screen name={Route.APPSTACK} component={HomeStack} options={{ title: "Home" }} />
                    <Tab.Screen name={Route.USERSCREEN} component={UsersListStack} options={{ title: "Users" }} />
                    <Tab.Screen name={"Settings"} component={SettingScreenStack} options={{ title: "Settings" }} />
                </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}