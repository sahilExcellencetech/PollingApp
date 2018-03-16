import * as fireAction from '../../services/LoginServices'
import * as constants from "../constants";
import * as actions from "../action";

function login(){
  return fireAction.loginApi();
}

export function requestLogin (data){
  return function(dispatch){
    login().then((res)=>{
      dispatch(actions.successLogin(res));
    });
  }
}
