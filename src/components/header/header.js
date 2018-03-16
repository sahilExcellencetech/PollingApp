import React from 'react'
import style from './header.scss'

export default class Header extends React.Component{
  render(){
    return(
      <div id="header">
        <h1>{this.props.heading}</h1>
      </div>
    )
  }
}
