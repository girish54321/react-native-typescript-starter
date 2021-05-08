import { AppView } from '@components/Flex/Flex'
import LanguageSelector from '@components/LanguageSelector'
import React from 'react'
import { View } from 'react-native'
import { List, Switch } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../../redux/themeStore/action'
import { darkThemeType } from '../../redux/themeStore/reducers'


const SettingsScreen = () => {
  const appDispatch = useDispatch();
  const data: darkThemeType = useSelector((state: any) => state.themeReducer);

  const toggleSwitch = (value: boolean) => {
    appDispatch(changeTheme(value));
  }

  return (
    <AppView>
      <View
        style={{
          flex: 1
        }}>
        <LanguageSelector />
        <List.Item
          onPress={() => {
            appDispatch(changeTheme(!data.isDarkTheme))
          }}
          title="Dark / Ligt Mode"
          description="Change App Theme"
          left={props => <List.Icon {...props} icon="theme-light-dark" />}
          right={() => (
            <Switch value={data.isDarkTheme} onValueChange={toggleSwitch} />
          )}
        />
      </View>
    </AppView>
  )
}

export default SettingsScreen
