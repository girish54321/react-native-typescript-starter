import { useTheme } from '@components/ThemeContext/ThemeContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Theme as NavigationTheme } from '@react-navigation/native/lib/typescript/src/types';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalScreen } from '@screens/modal/ModalScreen';
import { UsersScreen } from '@screens/UsersScreen/UsersScreen';
import { WelcomeScreen } from '@screens/welcome/WelcomeScreen';
import { Route } from 'models/constants/Route';
import React, { FC, useMemo } from 'react';
import { HOME_STACK_OPTIONS, MODAL_SCREEN_OPTIONS, USERLIST_STACK_OPTIONS, StackArguments } from './NavigationTypings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator<StackArguments>();
const UserStack = createStackNavigator<StackArguments>();
const Tab = createBottomTabNavigator();
export const Navigation: FC = () => {
    const { theme } = useTheme();

    const HomeStack = () => {
        return (
            <Stack.Navigator mode="modal" screenOptions={HOME_STACK_OPTIONS}>
                <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} />
            </Stack.Navigator>
        )
    }

    const UsersListStack = () => {
        return (
            <UserStack.Navigator screenOptions={{ ...USERLIST_STACK_OPTIONS, title: "Users" }}>
                <UserStack.Screen name={Route.USERSCREEN} component={UsersScreen}

                    options={{
                        title: 'My home',
                        headerStyle: {
                            backgroundColor: '#f4511e',
                            elevation: 22
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }} />
            </UserStack.Navigator>
        )
    }

    const navigationTheme: NavigationTheme = useMemo(() => {
        return {
            dark: theme.dark,
            colors: {
                primary: theme.colors.primary,
                background: theme.colors.background,
                card: theme.colors.surface,
                border: theme.colors.onBackground,
                text: theme.colors.onSurface
            }
        }
    }, [theme]);

    return (
        <NavigationContainer theme={navigationTheme}>
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
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: theme.colors.primary,
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name={Route.APPSTACK} component={HomeStack} options={{ title: "Home" }} />
                <Tab.Screen name={Route.USERSCREEN} component={UsersListStack} options={{ title: "Users" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}