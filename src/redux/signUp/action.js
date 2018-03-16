import * as fireAction from '../../services/SignupServices'
import * as constants from "../constants";
import * as actions from "../action";

function signUp(details){
   return fireAction.signUpApi(details);
}

export function requestSignUp (details) {
   return function(dispatch){
       signUp(details).then((res) => {
            dispatch(actions.successSignUp(res));
       });
   }
 }
