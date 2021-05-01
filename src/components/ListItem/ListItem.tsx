import React, { FC } from "react";
import { Text, TextProps, View, } from "react-native";

export const ListItem: FC<TextProps> = props => {
    const { style, name, email } = props;
    return (
        <View>
            <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 14 }}>
                <View style={{ padding: 14 }}>
                    <Text style={style}>{name}</Text>
                    <Text style={style}>{email}</Text>
                </View>
            </View>
            <View style={{ height: 1, backgroundColor: 'gray', width: "100%", marginHorizontal: 14 }} />
        </View>
    );
}