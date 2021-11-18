import React, { useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  NativeModules,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import { TextInput, Button, Title, useTheme, } from 'react-native-paper';
import { loginUser } from '../../redux/authStore/action';
import { Colors } from 'Config/Colors';
import SizedBox from '@components/SizedBox';
const LoginScreen = ({ navigation: any }) => {
  const paperTheme = useTheme();

  const [userData, setuserData] = useState({
    email: '',
    password: '',
    secureTextEntry: true,
    isValidEmail: false,
    isValidPassword: false,
  });

  const data = NativeModules.CalendarModule;
  console.log("daa", data);


  const authDispatch = useDispatch();
  const saveUserLogin = () => {
    if (userData.isValidEmail && userData.isValidPassword) {
      let data = {
        userLoggedIn: true,
        userName: userData.email,
        email: userData.email,
      };
      authDispatch(loginUser(data));
    } else {

    }
  };

  const textEmailChange = (val: any) => {
    setuserData({
      ...userData,
      email: val.trim(),
      isValidEmail: true,
    });
  };

  const textPasswordChange = (val: any) => {
    if (val.trim().length >= 8) {
      setuserData({
        ...userData,
        password: val,
        isValidPassword: true,
      });
    } else {
      setuserData({
        ...userData,
        password: val,
        isValidPassword: false,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        paddingHorizontal: 34,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
      </View>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <TouchableOpacity
          onPress={() => {
            // CalendarModule.createCalendarEvent('testName', 'testLocation');
          }}
          style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', flex: 1 }}>
          <Text >Running {data.evn}</Text>
          <View style={{ marginTop: 8 }} />
          <Text >Your Base URL is {data.baseUrl}</Text>
        </TouchableOpacity>
        <TextInput
          textAlign=""
          style={{ backgroundColor: paperTheme.colors.background }}
          label="Email"
          autoCapitalize="none"
          value={userData.email}
          placeholder="Email"

          onChangeText={textEmailChange}
          right={
            <TextInput.Icon
              name={'email'}
              color={userData.isValidEmail ? Colors.primary : 'gray'}
            />
          }
        />
        <TextInput
          textAlign=""
          style={{ backgroundColor: paperTheme.colors.background }}
          secureTextEntry={userData.secureTextEntry}
          label="Password"
          placeholder="Password"
          autoCapitalize="none"
          value={userData.password}
          onChangeText={textPasswordChange}
          right={
            <TextInput.Icon
              name={'key'}
              color={userData.isValidPassword ? Colors.primary : 'gray'}
            />
          }
        />
        <SizedBox size={16} />
        <Button
          mode="contained"
          contentStyle={{ height: 50 }}
          onPress={() => saveUserLogin()}>
          Login
        </Button>
      </View>
      <View style={{ flex: 1 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
