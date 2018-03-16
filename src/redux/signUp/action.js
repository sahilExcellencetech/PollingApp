import * as fireAction from '../../services/SignupServices'
import * as constants from "../constants";
import * as actions from "../action";

function signUp(){
   return fireAction.signUpApi();
}

export function requestSignUp (data) {
   return function(dispatch){
       signUp().then((res) => {
            dispatch(actions.successSignUp(res));
       });
   }
 }
