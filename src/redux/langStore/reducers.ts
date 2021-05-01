import AsyncStorage from '@react-native-community/async-storage'
import { ActionTypes } from '../../models/constants/ActionTypes'

export interface langType {
  appLang: 'fr' | 'en';
}

const initialState: langType = {
  appLang: 'en'
}

export const langReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.CHECK_LANG:
      AsyncStorage.setItem(ActionTypes.CHECK_LANG, action.payload)
      return {
        ...state,
        appLang: action.payload
      }
    case ActionTypes.CHNAGE_LANG:
      AsyncStorage.setItem(ActionTypes.CHECK_LANG, action.payload)
      return {
        ...state,
        appLang: action.payload
      }
    default:
      return state
  }
}
