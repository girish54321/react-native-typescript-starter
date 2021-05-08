import { userListReducer } from './homeImageStore/userListReducer'
import { themeReducer } from './themeStore/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userListReducer,
  themeReducer,
})

export default rootReducer
