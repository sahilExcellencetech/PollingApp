import { combineReducers } from 'redux'
import signUp from './signUp/reducer'
import login from './login/reducer'

export const makeRootReducer = (asyncReducers) => {
 return combineReducers({
   signUp: signUp,
   login: login,
   ...asyncReducers,

 })
}

export const injectReducer = (store, { key, reducer }) => {
 if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

 store.asyncReducers[key] = reducer
 store.replaceReducer(makeRootReducer(store.asyncReducers))
}




export default makeRootReducer;
