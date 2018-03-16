import 'whatwg-fetch';
import Login from '/home/excellencetech/PollingApp/src/modules/Login/components/Login.js'



// export const logiNapi=()=>{
//    axios.get('https://secure-refuge-14993.herokuapp.com/login?username=admin&password=admin')
//  .then( (response)=> {
//    console.log(response);
//  })
//  .catch(function (error) {
//    console.log(error);
//  });
// }

export const loginApi = () => {
 return fetch('https://secure-refuge-14993.herokuapp.com/login?username=lol&password=lol').then((response) => {
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
