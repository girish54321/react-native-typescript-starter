import { createStore } from 'redux'
import { langReducer } from './reducers'

export const store = createStore(langReducer)
