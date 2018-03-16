import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import './Signup.scss'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Header from './Header'

const style = {
  margin: 12,
};

export default class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
      <Header />
      <div className='container text-center'>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <div id="container">
      <h2>Sign Up</h2>
      <TextField style = {{width: ''}} type="text" hintText="Username" errorText="This field is required"/><br />
      <TextField style = {{width: ''}} type="password" hintText="Password" errorText="This field is required"/><br />
      <DropDownMenu value={this.state.value} onChange={this.handleChange} >
        <MenuItem value={1} primaryText="Admin" />
        <MenuItem value={2} primaryText="Staff" />
      </DropDownMenu>
      <br />
      <RaisedButton label="Sign Up" primary={true} style={style} />
      </div>
      </MuiThemeProvider>
      </div>
      </div>
    );
  }
}
