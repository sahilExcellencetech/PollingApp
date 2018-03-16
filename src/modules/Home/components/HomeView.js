import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';

import TextField from 'material-ui/TextField';
import './HomeView.scss'

const style = {
  margin: 12,
};

export const HomeView = () => (
  <div className='container text-center'>
  <div id="container">
    <h2>Polling System</h2>
    <Link to='/Signup'><RaisedButton label="Sign Up" primary={true} style={style}  /></Link>
    <Link to='/Login'><RaisedButton label="Login" primary={true} style={style}  /></Link>
  </div>
  </div>
)

export default HomeView
