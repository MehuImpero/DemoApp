import {combineReducers} from 'redux'
import auth from './authReducer'
import loginReducer from './loginReducer'
import user from './userReducer'

const rootReducer = combineReducers({
  auth,loginReducer,user,
})

export default rootReducer;
