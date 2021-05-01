import React, { useEffect } from "react";
import { StyleSheet, View, } from "react-native";
import { NavigationScreen } from "../../navigation/NavigationTypings";
import { Route } from "models/constants/Route";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { userListState } from "../../redux/homeImageStore/userListReducer";
import { setUserData } from "../../redux/homeImageStore/action";
import { UserList } from "../../models/responseType/UserListResponse";
import { ListItem } from "@components/ListItem/ListItem";
import { AppView, } from "@components/Flex/Flex";


export const UsersScreen: NavigationScreen<Route.WELCOME> = (props: any) => {
    const appDispatch = useDispatch();
    const data: userListState = useSelector((state: any) => state.userListReducer);

    useEffect(() => {
        appDispatch(setUserData())
    }, [])

    return (
        <AppView>
            <ScrollView style={style.scrollView}>
                {data.users.map((value: UserList, index: Number) => {
                    return (
                        <ListItem name={value.name} email={value.email} image={"https://www.w3schools.com/w3images/avatar2.png"} />
                    )
                })}
            </ScrollView>
        </AppView>
    );
}

const style = StyleSheet.create({
    scrollView: {
        flex: 1,
    }
});