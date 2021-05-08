import React from "react";
import { StyleSheet, Text } from "react-native";
import { AppView, Column } from "../../components/Flex/Flex";
import { AppButton } from "@components/Button/Button";

export const WelcomeScreen = (props: any) => {

    return (
        <AppView>
            <Column alignItems="center" justifyContent="center" style={[style.container,]}>
                <AppButton
                    onPress={() => {
                        console.log("React Native");
                    }}>
                    <Text>React Native Starter</Text>
                </AppButton>
            </Column>
        </AppView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    }
});