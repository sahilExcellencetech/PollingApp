import React from 'react';
import style from './UserList.scss'
import Header from '../../../components/header/header'

export default class UserList extends React.Component{
  render(){
    return(
      <div>
        <Header heading="User List" />
        <div className='container text-center'>
          <div id="container">
            <h2>User List</h2>
          </div>
        </div>
      </div>
    )
  }
}
