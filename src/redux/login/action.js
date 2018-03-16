import * as fireAction from '../../services/LoginServices'
import * as constants from "../constants";
import * as actions from "../action";

function login(details){
  return fireAction.loginApi(details);
}

export function requestLogin (details){
  return function(dispatch){
    login(details).then((res)=>{
      dispatch(actions.successLogin(res));
    });
  }
}
