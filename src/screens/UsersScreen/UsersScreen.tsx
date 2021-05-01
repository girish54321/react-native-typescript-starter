import React, { useEffect } from "react";
import { Text } from 'react-native'
import { StyleSheet, } from "react-native";
import { NavigationScreen } from "../../navigation/NavigationTypings";
import { Route } from "models/constants/Route";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { userListState } from "../../redux/homeImageStore/userListReducer";
import { setUserData } from "../../redux/homeImageStore/action";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserList } from "../../models/responseType/UserListResponse";
import { ListItem } from "@components/ListItem/ListItem";


export const UsersScreen: NavigationScreen<Route.WELCOME> = (props: any) => {
    const userispatch = useDispatch();
    const data: userListState = useSelector((state: any) => state.userListReducer);

    useEffect(() => {
        userispatch(setUserData())
    }, [])

    return (
        <SafeAreaView style={style.container}>
            <ScrollView style={style.scrollView}>
                {data.users.map((value: UserList, index: Number) => {
                    return (
                        <ListItem name={value.name} email={value.email} />
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    scrollView: {
        flex: 1
    }
});