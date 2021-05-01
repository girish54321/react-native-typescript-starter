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
import { HOME_STACK_OPTIONS, MODAL_SCREEN_OPTIONS, ROOT_STACK_OPTIONS, StackArguments } from './NavigationTypings';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator<StackArguments>();
const Tab = createBottomTabNavigator();
export const Navigation: FC = () => {
    const { theme } = useTheme();

    const AppStack = () => {
        return (
            <Stack.Navigator mode="modal" screenOptions={ROOT_STACK_OPTIONS}>
                <Stack.Screen name={Route.WELCOME} component={WelcomeScreen} />
                <Stack.Screen name={Route.MODAL} component={ModalScreen} options={MODAL_SCREEN_OPTIONS} />
            </Stack.Navigator>
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
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name={Route.APPSTACK} component={AppStack}
                    options={{ ...HOME_STACK_OPTIONS, title: "Home" }} />
                <Tab.Screen name={Route.USERSCREEN} component={UsersScreen}
                    options={{ ...HOME_STACK_OPTIONS, title: "Users" }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}