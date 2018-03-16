import browserHistory from 'react-router/lib/browserHistory';
import * as constants from '../constants'

const initialState = browserHistory.getCurrentLocation()
export default function signUp (state = initialState, action) {
 console.log(action, 'fire2');
 return action.type === constants.SUCCESS_SIGNUP
   ? action.payload
   : state
}
