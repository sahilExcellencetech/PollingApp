import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import './HomeView.scss'

const style = {
  margin: 12,
};

export const HomeView = () => (
  <div className='container text-center'>
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <div id="container">
    <h2>Polling System</h2>
    <RaisedButton label="Sign Up" primary={true} style={style}  />
    <RaisedButton label="Login" primary={true} style={style}  />
  </div>
  </MuiThemeProvider>
  </div>
)

export default HomeView
