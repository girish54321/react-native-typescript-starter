import React from "react";
import { StyleSheet } from "react-native";
import { AppView, Column } from "../../components/Flex/Flex";
import { useLocalization } from "../../components/LocalizedContext/LocalizationContext";
import { NavigationScreen } from "../../navigation/NavigationTypings";
import { Route } from "models/constants/Route";
import { LocalizedText } from "@components/LocalizedText/LocalizedText";
import { AppButton } from "@components/Button/Button";


export const WelcomeScreen: NavigationScreen<Route.WELCOME> = props => {
    const { navigation } = props;
    const { supportedLanguages, changeLanguage } = useLocalization();


    return (
        <AppView>
            <Column alignItems="center" justifyContent="center" style={[style.container,]}>
                <Column alignItems='center' justifyContent='center' style={[style.column,]}>
                    <LocalizedText style={style.title}>
                        welcomeToStarter
                </LocalizedText>

                    <LocalizedText style={style.sub}>
                        dependencyList
                </LocalizedText>
                </Column>


                <Column style={style.buttons}>
                    {supportedLanguages.map(t => (
                        <AppButton mode="contained" key={t} style={style.button} onPress={() => changeLanguage(t)}>
                            <LocalizedText style={style.center}>
                                changeTo

                            <LocalizedText >
                                    {t.toUpperCase()}
                                </LocalizedText>
                            </LocalizedText>
                        </AppButton>
                    ))}
                </Column>
            </Column>
        </AppView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    column: {
        width: '100%',
        padding: 15,
        borderRadius: 6,
        borderWidth: 1,
        marginBottom: 15,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 14
    },
    sub: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 15
    },
    buttons: {
        width: '100%',
    },
    button: {
        width: '100%',
        marginBottom: 15,
        borderRadius: 6
    },
    smallButton: {
        width: '48%',
        borderRadius: 6
    },
    center: {
        textAlign: 'center'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 15
    },
    modalText: {
        fontSize: 14
    }
});