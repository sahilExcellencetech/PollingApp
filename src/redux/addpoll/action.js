import * as fireAction from '../../services/AddpollServices'
import * as constants from "../constants";
import * as actions from "../action";

function addPoll(details){
   return fireAction.addpollApi(details);
}

export function requestAddPoll (details) {
   return function(dispatch){
       addPoll(details).then((res) => {
            dispatch(actions.successAddpoll(res));
       });
   }
 }
