import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import './Login.scss'
import Header from './Header'

const style = {
  margin: 12,
};

export const Login = ({ children }) => (
  <div>
  <Header />
  <div className='container text-center'>
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <div id="container">
  <h2>Login</h2>
  <TextField style = {{width: ''}} type="text" hintText="Username" errorText="This field is required"/><br />
  <TextField style = {{width: ''}} type="password" hintText="Password" errorText="This field is required"/><br />
  <RaisedButton label="Login" primary={true} style={style} />
  </div>
  </MuiThemeProvider>
  </div>
  </div>
)

export default Login
