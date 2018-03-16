import React from 'react';
import style from './UserList.scss'
import Header from '../../../components/header/header'
import  CONFIG  from '../../../config/';

export default class UserList extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
    }
  }
  componentDidMount(){
    fetch(`${CONFIG.BASE_URL}list_users`).
    then((Response)=>Response.json()).
    then((findresponse)=>
    {
      this.setState({
        data:findresponse.data,
      })
    })
  }

  render(){


    return(
      <div>
        <Header heading="User List" />
        <div className='container text-center'>
          <div id="container">
            <div id="wrapper">
                <div id="left-wrapper-username">
                    <h4>Username</h4>
                    {
                    this.state.data.map((dynamicData,key) =>
                      <span>{dynamicData.username}<br /></span>
                      )
                    }
                  </div>
                  <div id="left-wrapper-username">
                    <h4>Role</h4>
                    {
                      this.state.data.map((dynamicData,key) =>
                        <span>{dynamicData.role}<br /></span>
                      )
                    }
                  </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
