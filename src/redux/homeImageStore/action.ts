import { getUsers } from '../../Network/index';
import { ActionTypes } from '../../models/constants/ActionTypes'
import { AxiosResponse } from 'axios';
import { UserList } from '../../models/responseType/UserListResponse';

export const setUserData = () => async (dispatch: any, getState: any) => {
  dispatch({
    type: ActionTypes.SET_USER_LOADING
  })
  getUsers()
    .then((res: AxiosResponse) => {
      console.log("res", res);

      if (res.status === 200) {
        let data: UserList[] = [];
        for (let i = 0; i < res.data.length; i++) {
          data.push(res.data[i]);
        }
        console.log("we have the dta1");

        dispatch({
          type: ActionTypes.SET_USER,
          payload: data
        })
      } else {
        console.log("we have the dta11");
        dispatch({
          type: ActionTypes.SET_USER_ERROR,
          payload: `Error :${res.status}`
        })
      }
    })
    .catch((err) => {
      console.error("Fetch Example Error: ", err);
      dispatch({
        type: ActionTypes.SET_USER_ERROR,
        payload: `"Fetch Example Error: ${err}`
      })
    });
}

export const setUserListError = payload => ({
  type: ActionTypes.SET_USER_ERROR,
  payload

})

export const setHomeLoading = payload => ({
  type: ActionTypes.SET_USER_LOADING,
})