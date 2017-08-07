import {combineReducers} from 'redux'
import weatherReducer from './weatherReducer'
import navReducer from './navReducer'

export default combineReducers({
  weatherReducer,
  navReducer
})
