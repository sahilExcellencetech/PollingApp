import 'whatwg-fetch';
import  CONFIG  from '../config/';


export const addpollApi = (details) => {
 return fetch(`${CONFIG.BASE_URL}add_poll?title=${details.title}&options=${details.option1}____${details.option2}____${details.option3}____${details.option4}`).then((response) => {
   if (response.status === 500) {
     return new Promise((resolve, reject) => {
       response.json().then((data) => {
         reject(data);
       });
     });
   } else if (response.status === 401) {
     confirm('401 Access Denied !', '<span style="color:#f27474;font-size:18px;font-weight:600">' + action + '</span><br/>You are unauthorized to the Action - Contact Admin!!', 'error').then((res) => {
       resetLoggedUser();
       location.href = CONFIG.BASE_URL;
     });
   } else {
     return response.json();
   }
 });
}
