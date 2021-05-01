import React, { FC } from "react";
import { ButtonProps } from "./ButtonProps";
import { Button, } from "react-native-paper";

export const AppButton: FC<ButtonProps> = props => {
    const { mode, children, style, onPress, ...rest } = props;
    return (
        <Button onPress={onPress} mode={mode} style={[{ borderRadius: 4, padding: 4 }, style]}>
            {children}
        </Button>
    );
}