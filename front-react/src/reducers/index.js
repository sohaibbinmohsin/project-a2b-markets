import {combineReducers} from 'redux'
import categories from './markets'
import auth from './auth'
export default combineReducers({categories, auth})