import browserHistory from 'react-router/lib/browserHistory';
import * as constants from '../constants'

const initialState = browserHistory.getCurrentLocation()
export default function login (state = initialState, action) {
 console.log(action, 'fire1');
 return action.type === constants.SUCCESS_LOGIN
   ? action.payload
   : state
}
