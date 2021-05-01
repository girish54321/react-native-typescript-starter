import { userListReducer } from './homeImageStore/userListReducer'
import { themeReducer } from './themeStore/reducers'
import { langReducer } from './langStore/reducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  userListReducer,
  themeReducer,
  langReducer
})

export default rootReducer
