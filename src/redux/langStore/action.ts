import AsyncStorage from '@react-native-community/async-storage'
import { ActionTypes } from '../../models/constants/ActionTypes'

export const checkLang = () => async (dispatch: any, getState: any) => {
  AsyncStorage.getItem(ActionTypes.CHECK_LANG).then((data) => {
    if (data) {
      dispatch({
        type: ActionTypes.CHNAGE_LANG,
        payload: data
      })
    } else {
      dispatch({
        type: ActionTypes.CHECK_LANG,
        payload: 'en'
      })
    }
  })
}

export const changeLang = (payload: any) => ({
  type: ActionTypes.CHNAGE_LANG,
  payload,
});

